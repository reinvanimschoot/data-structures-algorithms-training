// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

export const treeIncludes = (root, targetVal) => {
  if (!root) return false;

  const queue = [root];

  while (queue.length) {
    const current = queue.shift();

    if (current.val === targetVal) return true;

    if (current.right) queue.push(current.right);
    if (current.left) queue.push(current.left);
  }

  return false;
};
