import { expect, test } from "vitest";

import { listValues } from "./listValues";

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

  expect(listValues(a)).toEqual(["a", "b", "c", "d"]);
});

test("test_01", () => {
  const x = new Node("x");
  const y = new Node("y");

  x.next = y;

  expect(listValues(x)).toEqual(["x", "y"]);
});

test("test_02", () => {
  const q = new Node("q");

  expect(listValues(q)).toEqual(["q"]);
});

test("test_03", () => {
  expect(listValues(null)).toEqual([]);
});
