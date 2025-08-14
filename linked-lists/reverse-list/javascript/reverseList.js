// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

export const reverseList = (head) => {
  let currentNode = head;

  let prev = null;

  while (currentNode) {
    const temp = currentNode.next;

    currentNode.next = prev;

    prev = currentNode;
    currentNode = temp;
  }

  return prev;
};
