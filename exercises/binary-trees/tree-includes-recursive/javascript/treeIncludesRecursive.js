// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

export const treeIncludesRecursive = (root, targetVal) => {
  if (!root) return false;

  return (
    root.val === targetVal ||
    treeIncludesRecursive(root.left, targetVal) ||
    treeIncludesRecursive(root.right, targetVal)
  );
};
