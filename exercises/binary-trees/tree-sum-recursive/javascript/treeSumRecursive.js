// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

export const treeSumRecursive = (root) => {
  if (!root) return 0;

  if (!root.left && !root.right) return root.val;

  return root.val + treeSumRecursive(root.left) + treeSumRecursive(root.right);
};
