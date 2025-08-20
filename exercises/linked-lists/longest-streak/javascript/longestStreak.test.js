import { expect, test } from "vitest";

import { longestStreak } from "./longestStreak";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

test("test_00", () => {
  const a = new Node(5);
  const b = new Node(5);
  const c = new Node(7);
  const d = new Node(7);
  const e = new Node(7);
  const f = new Node(6);

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;

  expect(longestStreak(a)).toEqual(3);
});

test("test_01", () => {
  const a = new Node(3);
  const b = new Node(3);
  const c = new Node(3);
  const d = new Node(3);
  const e = new Node(9);
  const f = new Node(9);

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;

  expect(longestStreak(a)).toEqual(4);
});

test("test_02", () => {
  const a = new Node(9);
  const b = new Node(9);
  const c = new Node(1);
  const d = new Node(9);
  const e = new Node(9);
  const f = new Node(9);

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;

  expect(longestStreak(a)).toEqual(3);
});

test("test_03", () => {
  const a = new Node(5);
  const b = new Node(5);

  a.next = b;

  expect(longestStreak(a)).toEqual(2);
});

test("test_04", () => {
  const a = new Node(4);

  expect(longestStreak(a)).toEqual(1);
});

test("test_05", () => {
  expect(longestStreak(null)).toEqual(0);
});
