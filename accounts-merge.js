class Node {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.neighbours = new Set();
  }
}

var accountsMerge = function (accounts) {
  const emailToNodeMap = {};
  const visited = new Set();

  accounts.forEach((account) => {
    const [name, ...emails] = account;

    emails.forEach((email) => {
      emailToNodeMap[email] = emailToNodeMap[email] || new Node(name, email);
    });

    const neighbours = emails.map((email) => emailToNodeMap[email]);

    emails.forEach((email) => {
      neighbours.forEach((neighbour) => {
        if (neighbour.email === email) {
          return;
        }

        emailToNodeMap[email].neighbours.add(neighbour);
      });
    })
  });

  console.log(emailToNodeMap)

  const users = [];
  const dfs = (node, current) => {
    if (visited.has(node)) {
      return;
    }

    current.push(node);
    visited.add(node);

    const { neighbours } = node;

    [...neighbours].forEach((neighbour) => {
      dfs(neighbour, current);
    })
  };

  Object.values(emailToNodeMap).forEach((node) => {
    const current = [];
    dfs(node, current);

    if (!current.length) {
      return;
    }

    users.push(current)
  });

  const formattedUsers = users.map((row) => {
    const [{ name }] = row;
    const emails = row.map(({ email }) => email).sort();

    return [name].concat(emails);
  });

  // console.log('users', formattedUsers);
  return formattedUsers;
};

// output:
// [
//   [
//     "John",
//     "john00@mail.com",
//     "john_newyork@mail.com",
//     "johnsmith@mail.com"
//   ],
//   [
//     "Mary",
//     "mary@mail.com"
//   ],
//   [
//     "John",
//     "johnnybravo@mail.com"
//   ]
// ]

const data = [
  [
    "John",
    "johnsmith@mail.com",
    "john_newyork@mail.com"
  ],
  [
    "John",
    "johnsmith@mail.com",
    "john00@mail.com"
  ],
  [
    "Mary",
    "mary@mail.com"
  ],
  [
    "John",
    "johnnybravo@mail.com"
  ]
]

console.log(accountsMerge(data));