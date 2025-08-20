// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

export const treeMinValueRecursive = (root) => {
  if (!root) return Infinity;

  return Math.min(
    root.val,
    treeMinValueRecursive(root.left),
    treeMinValueRecursive(root.right)
  );
};
