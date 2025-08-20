import { expect, test } from "vitest";

import { sumList } from "./sumList";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

test("test_00", () => {
  const a = new Node(2);
  const b = new Node(8);
  const c = new Node(3);
  const d = new Node(-1);
  const e = new Node(7);

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;

  expect(sumList(a)).toEqual(19);
});

test("test_01", () => {
  const x = new Node(38);
  const y = new Node(4);

  x.next = y;

  expect(sumList(x)).toEqual(42);
});

test("test_02", () => {
  const z = new Node(100);

  expect(sumList(z)).toEqual(100);
});

test("test_03", () => {
  expect(sumList(null)).toEqual(0);
});
