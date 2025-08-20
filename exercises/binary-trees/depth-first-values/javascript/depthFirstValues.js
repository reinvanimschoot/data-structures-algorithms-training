// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

export const depthFirstValues = (root) => {
  const values = [];

  if (!root) return values;

  const stack = [root];

  while (stack.length) {
    const current = stack.pop();

    values.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return values;
};
