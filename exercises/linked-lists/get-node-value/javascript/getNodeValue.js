// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

export const getNodeValue = (head, index) => {
  let currentNode = head;
  let currentIndex = 0;

  while (currentNode) {
    if (currentIndex === index) return currentNode.val;

    currentIndex += 1;
    currentNode = currentNode.next;
  }

  return null;
};
