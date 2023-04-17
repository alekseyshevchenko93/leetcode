const findOrder = function (numCourses, prerequisites) {
  const courseToPrerequisitesMap = {};
  const order = [];

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
      order.push(course);

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

    order.push(course);

    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return [];
    }
  }

  visited = new Set();
  const order2 = [];

  order.forEach((item) => {
    if (visited.has(item)) {
      return;
    }

    order2.push(item);
    visited.add(item);
  });

  return order2;
};