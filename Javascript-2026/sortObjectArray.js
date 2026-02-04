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

// BFS Fattening
function bfsFatten(tree) {
  const result = [];
  const queue = [tree];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.value) {
      result.push(current.value);
    }
    for (const key in current) {
      if (key !== "value" && Array.isArray(current[key])) {
        for (const child of current[key]) {
          queue.push(child);
        }
      }
    }
  }

  return result;
}

console.log("BFS Fattened Array:", bfsFatten(tree)); // Output: ["A", "B", "C", "D", "E", "F", "G"]

// other way to fatten the object array using recursion
function flattenArray(tree, result = []) {
  if (tree.value) {
    console.log("Current Value:", tree.value);
    result.push(tree.value);
  }
  if (tree.children && tree.children.length > 0) {
    for (const child of tree.children) {
      flattenArray(child, result);
    }
  }

  return result.sort();
}

console.log("Recursion Fattened Array:", flattenArray(tree, (result = []))); // Output: ["A", "B", "D", "E", "C", "F", "G"]
