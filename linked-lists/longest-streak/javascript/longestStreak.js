// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

export const longestStreak = (head) => {
  if (!head) return 0;

  let currentNode = head;

  let longestStreak = 0;
  let currentStreak = 0;
  let currentVal = head.val;

  while (currentNode) {
    if (currentNode.val === currentVal) {
      currentStreak++;
    } else {
      longestStreak = Math.max(currentStreak, longestStreak);

      currentVal = currentNode.val;
      currentStreak = 1;
    }

    currentNode = currentNode.next;
  }

  if (currentStreak > longestStreak) {
    longestStreak = Math.max(currentStreak, longestStreak);
  }

  return longestStreak;
};
