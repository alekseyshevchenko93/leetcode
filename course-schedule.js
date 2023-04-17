const canFinish = function (numCourses, prerequisites) {
  const courseToPrerequisitesMap = {};

  for (let i = 0; i < numCourses; i++) {
    courseToPrerequisitesMap[i] = new Set();
  }

  for (let [first, second] of prerequisites) {
    courseToPrerequisitesMap[first].add(second);
  }

  let visited = new Set();

  function dfs(course) {
    if (visited.has(course)) {
      return false;
    }

    if (!courseToPrerequisitesMap[course].size) {
      return true;
    }

    visited.add(course);

    for (let node of courseToPrerequisitesMap[course]) {
      if (!dfs(node)) {
        return false;
      }
    }

    visited.delete(course);
    courseToPrerequisitesMap[course] = new Set();

    return true;
  }


  console.log(courseToPrerequisitesMap);

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false;
    }
  }

  return true;
};

// console.log(canFinish(5, [[0, 1], [0, 2], [1, 3], [1, 4], [3, 4]]));
// console.log(canFinish(3, [[0, 1], [1, 2], [2, 0]]));
// console.log(canFinish(5, [[2, 0], [1, 0], [3, 1], [3, 2], [1, 3]]));

console.log(canFinish(5, [[1, 4], [2, 4], [3, 1], [3, 2]]));
