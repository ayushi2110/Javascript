//large array of objects fattened using BFS and DFS
const tree = {
  value: "A",
  children: [
    {
      value: "B",
      children: [
        {
          value: "D",
          children: [],
        },
        {
          value: "E",
          children: [],
        },
      ],
    },
    {
      value: "C",
      children: [
        {
          value: "F",
          children: [],
        },
        {
          value: "G",
          children: [],
        },
      ],
    },
  ],
};

// DFS Fattening
function dfsFatten(tree, result = []) {
  if (Array.isArray(tree)) {
    for (const node of tree) {
      dfsFatten(node, result);
    }
  } else if (tree !== null && typeof tree === "object") {
    if (tree.value) {
      result.push(tree.value);
    }
    for (const key in tree) {
      if (key !== "value") {
        dfsFatten(tree[key], result);
      }
    }
  }
  return result;
}

console.log("DFS Fattened Array:", dfsFatten(tree)); // Output: ["A", "B", "D", "E", "C", "F", "G"]

//commit message eslint fix: corrected indentation and spacing issues in dfsFatten function