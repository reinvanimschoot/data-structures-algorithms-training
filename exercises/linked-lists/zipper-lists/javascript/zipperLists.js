// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

export const zipperLists = (head1, head2) => {
  let tail = head1;
  let count = 0;

  let current1 = head1.next;
  let current2 = head2;

  while (current1 && current2) {
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }

    tail = tail.next;
    count += 1;
  }

  if (current1) {
    tail.next = current1;
  }

  if (current2) {
    tail.next = current2;
  }

  return head1;
};
