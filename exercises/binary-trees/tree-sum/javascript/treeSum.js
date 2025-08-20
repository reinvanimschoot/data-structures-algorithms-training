// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

export const treeSum = (root) => {
  let sum = 0;

  if (!root) return sum;

  const queue = [root];

  while (queue.length) {
    const current = queue.shift();

    sum += current.val;

    if (current.right) queue.push(current.right);
    if (current.left) queue.push(current.left);
  }

  return sum;
};
