import { expect, test } from "vitest";

import { reverseList } from "./reverseList";
import { listValues } from "../../list-values/javascript/listValues";

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
  const e = new Node("e");
  const f = new Node("f");

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;

  expect(listValues(reverseList(a))).toEqual(["f", "e", "d", "c", "b", "a"]);
});

test("test_01", () => {
  const x = new Node("x");
  const y = new Node("y");

  x.next = y;

  expect(listValues(reverseList(x))).toEqual(["y", "x"]);
});

test("test_02", () => {
  const p = new Node("p");

  expect(listValues(reverseList(p))).toEqual(["p"]);
});
