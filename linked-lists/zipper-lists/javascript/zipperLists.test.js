import { expect, test } from "vitest";

import { zipperLists } from "./zipperLists";
import { linkedListValues } from "../../linked-list-values/javascript/linkedListValues";

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
  a.next = b;
  b.next = c;

  const x = new Node("x");
  const y = new Node("y");
  const z = new Node("z");
  x.next = y;
  y.next = z;

  expect(linkedListValues(zipperLists(a, x))).toEqual([
    "a",
    "x",
    "b",
    "y",
    "c",
    "z",
  ]);
});

test("test_01", () => {
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

  const x = new Node("x");
  const y = new Node("y");
  const z = new Node("z");
  x.next = y;
  y.next = z;

  expect(linkedListValues(zipperLists(a, x))).toEqual([
    "a",
    "x",
    "b",
    "y",
    "c",
    "z",
    "d",
    "e",
    "f",
  ]);
});

test("test_02", () => {
  const s = new Node("s");
  const t = new Node("t");
  s.next = t;

  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const four = new Node(4);
  one.next = two;
  two.next = three;
  three.next = four;
});

test("test_03", () => {
  const w = new Node("w");

  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  one.next = two;
  two.next = three;

  expect(linkedListValues(zipperLists(w, one))).toEqual(["w", 1, 2, 3]);
});

test("test_04", () => {
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  one.next = two;
  two.next = three;

  const w = new Node("w");

  expect(linkedListValues(zipperLists(one, w))).toEqual([1, "w", 2, 3]);
});
