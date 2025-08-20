// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

export const maxPathSum = (root) => {
  let maxPathSum = -Infinity;

  const stack = [{ node: root, pathSum: 0 }];

  while (stack.length) {
    const { node, pathSum } = stack.pop();

    const newSum = pathSum + node.val;

    if (!node.left && !node.right) {
      maxPathSum = Math.max(maxPathSum, newSum);
    }

    if (node.right) stack.push({ node: node.right, pathSum: newSum });
    if (node.left) stack.push({ node: node.left, pathSum: newSum });
  }

  return maxPathSum;
};
