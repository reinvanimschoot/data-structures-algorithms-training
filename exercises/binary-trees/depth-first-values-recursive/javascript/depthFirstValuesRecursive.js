// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

export const depthFirstValuesRecursive = (root) => {
  if (!root) return [];

  if (!root.left && !root.right) return [root.val];

  return [
    root.val,
    ...depthFirstValuesRecursive(root.left),
    ...depthFirstValuesRecursive(root.right),
  ];
};
