import { expect, test } from "vitest";

import { getListNodeValue } from "./getListNodeValue";

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

  expect(getListNodeValue(a, 2)).toEqual("c");
});

test("test_01", () => {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");

  a.next = b;
  b.next = c;
  c.next = d;

  expect(getListNodeValue(a, 3)).toEqual("d");
});

test("test_02", () => {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");

  a.next = b;
  b.next = c;
  c.next = d;

  expect(getListNodeValue(a, 7)).toEqual(null);
});

test("test_03", () => {
  const node1 = new Node("banana");
  const node2 = new Node("mango");

  node1.next = node2;

  expect(getListNodeValue(node1, 0)).toEqual("banana");
});

test("test_04", () => {
  const node1 = new Node("banana");
  const node2 = new Node("mango");

  node1.next = node2;

  expect(getListNodeValue(node1, 1)).toEqual("mango");
});
