// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

export const findValue = (head, target) => {
  let currentNode = head;

  while (currentNode) {
    if (currentNode.val === target) return true;

    currentNode = currentNode.next;
  }

  return false;
};
