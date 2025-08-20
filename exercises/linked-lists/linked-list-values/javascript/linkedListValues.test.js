import { expect, test } from "vitest";

import { linkedListValues } from "./linkedListValues";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

test("test_00", () => {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");

  a.next = b;
  b.next = c;
  c.next = d;

  expect(linkedListValues(a)).toEqual(["a", "b", "c", "d"]);
});

test("test_01", () => {
  const x = new Node("x");
  const y = new Node("y");

  x.next = y;

  expect(linkedListValues(x)).toEqual(["x", "y"]);
});

test("test_02", () => {
  const q = new Node("q");

  expect(linkedListValues(q)).toEqual(["q"]);
});

test("test_03", () => {
  expect(linkedListValues(null)).toEqual([]);
});
