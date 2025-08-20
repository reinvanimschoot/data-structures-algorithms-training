// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

export const sumList = (head) => {
  let currentNode = head;

  let sum = 0;

  while (currentNode) {
    sum += currentNode.val;

    currentNode = currentNode.next;
  }

  return sum;
};
