class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export const insertNode = (head, value, index) => {
  const newNode = new Node(value);

  if (index === 0) {
    newNode.next = head;

    return newNode;
  }

  let currentNode = head;
  let currentIndex = 0;

  while (currentNode) {
    if (currentIndex === index - 1) {
      const temp = currentNode.next;

      currentNode.next = newNode;

      currentNode.next.next = temp;
      break;
    }

    currentNode = currentNode.next;
    currentIndex++;
  }

  return head;
};
