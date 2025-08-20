// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

export const treePathFinder = (root, targetVal) => {
  if (!root) return null;

  if (root.val === targetVal) {
    return [root.val];
  }

  const left = treePathFinder(root.left, targetVal);
  if (left) {
    return [root.val, ...left];
  }

  const right = treePathFinder(root.right, targetVal);
  if (right) {
    return [root.val, ...right];
  }

  return null;
};
