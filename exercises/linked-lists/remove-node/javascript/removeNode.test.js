import { expect, test } from "vitest";

import { linkedListValues } from "../../linked-list-values/javascript/linkedListValues";
import { removeNode } from "./removeNode";

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

  expect(linkedListValues(removeNode(a, "c"))).toEqual([
    "a",
    "b",
    "d",
    "e",
    "f",
  ]);
});

test("test_01", () => {
  const x = new Node("x");
  const y = new Node("y");
  const z = new Node("z");

  x.next = y;
  y.next = z;

  expect(linkedListValues(removeNode(x, "z"))).toEqual(["x", "y"]);
});

test("test_02", () => {
  const q = new Node("q");
  const r = new Node("r");
  const s = new Node("s");

  q.next = r;
  r.next = s;

  expect(linkedListValues(removeNode(q, "q"))).toEqual(["r", "s"]);
});

test("test_03", () => {
  const node1 = new Node("h");
  const node2 = new Node("i");
  const node3 = new Node("j");
  const node4 = new Node("i");

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;

  expect(linkedListValues(removeNode(node1, "i"))).toEqual(["h", "j", "i"]);
});

test("test_04", () => {
  const t = new Node("t");

  expect(removeNode(t, "t")).toEqual(null);
});
