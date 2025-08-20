import { expect, test } from "vitest";

import { linkedListValues } from "../../linked-list-values/javascript/linkedListValues";
import { insertNode } from "./insertNode";

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

  expect(linkedListValues(insertNode(a, "x", 2))).toEqual([
    "a",
    "b",
    "x",
    "c",
    "d",
  ]);
});

test("test_01", () => {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");

  a.next = b;
  b.next = c;
  c.next = d;

  expect(linkedListValues(insertNode(a, "v", 3))).toEqual([
    "a",
    "b",
    "c",
    "v",
    "d",
  ]);
});

test("test_02", () => {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");

  a.next = b;
  b.next = c;
  c.next = d;

  expect(linkedListValues(insertNode(a, "m", 4))).toEqual([
    "a",
    "b",
    "c",
    "d",
    "m",
  ]);
});

test("test_03", () => {
  const a = new Node("a");
  const b = new Node("b");

  a.next = b;

  expect(linkedListValues(insertNode(a, "z", 0))).toEqual(["z", "a", "b"]);
});
