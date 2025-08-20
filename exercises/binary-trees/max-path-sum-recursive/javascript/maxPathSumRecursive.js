// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

export const maxPathSumRecursive = (root) => {
  if (!root) return -Infinity;

  if (!root.left && !root.right) return root.val;

  return (
    root.val +
    Math.max(maxPathSumRecursive(root.left), maxPathSumRecursive(root.right))
  );
};
