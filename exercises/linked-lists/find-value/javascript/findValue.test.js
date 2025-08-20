import { expect, test } from "vitest";

import { findValue } from "./findValue";

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

  expect(findValue(a, "c")).toEqual(true);
});

test("test_01", () => {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");

  a.next = b;
  b.next = c;
  c.next = d;

  expect(findValue(a, "d")).toEqual(true);
});

test("test_02", () => {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");

  a.next = b;
  b.next = c;
  c.next = d;

  expect(findValue(a, "q")).toEqual(false);
});

test("test_03", () => {
  const node1 = new Node("jason");
  const node2 = new Node("leneli");

  node1.next = node2;

  expect(findValue(node1, "jason")).toEqual(true);
});

test("test_04", () => {
  const node1 = new Node(42);

  expect(findValue(node1, 42)).toEqual(true);
});

test("test_05", () => {
  const node1 = new Node(42);

  expect(findValue(node1, 100)).toEqual(false);
});
