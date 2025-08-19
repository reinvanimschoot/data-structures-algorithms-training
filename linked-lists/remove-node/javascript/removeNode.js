// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

export const removeNode = (head, targetVal) => {
  if (head.val === targetVal) return head.next;

  let prevNode = null;
  let currentNode = head;

  while (currentNode) {
    if (currentNode.val === targetVal) {
      prevNode.next = currentNode.next ? currentNode.next : null;
      break;
    }

    prevNode = currentNode;
    currentNode = currentNode.next;
  }

  return head;
};
