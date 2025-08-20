// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

export const treeMinValue = (root) => {
  let min = Infinity;

  const queue = [root];

  while (queue.length) {
    const current = queue.shift();

    min = Math.min(min, current.val);

    if (current.right) queue.push(current.right);
    if (current.left) queue.push(current.left);
  }

  return min;
};
