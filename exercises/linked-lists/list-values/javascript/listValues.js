// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

export const listValues = (head) => {
  let currentNode = head;

  const values = [];

  while (currentNode) {
    values.push(currentNode.val);

    currentNode = currentNode.next;
  }

  return values;
};
