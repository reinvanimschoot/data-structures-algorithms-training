// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

export const isUnivalueList = (head) => {
  let currentNode = head.next;

  while (currentNode) {
    if (head.val !== currentNode.val) return false;

    currentNode = currentNode.next;
  }

  return true;
};
