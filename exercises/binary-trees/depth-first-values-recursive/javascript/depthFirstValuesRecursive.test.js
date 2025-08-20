import { expect, test } from "vitest";
import { depthFirstValuesRecursive } from "./depthFirstValuesRecursive";

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

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f

  expect(depthFirstValuesRecursive(a)).toEqual(["a", "b", "d", "e", "c", "f"]);
});

test("test_01", () => {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");
  const g = new Node("g");

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;

  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f
  //    /
  //   g

  expect(depthFirstValuesRecursive(a)).toEqual([
    "a",
    "b",
    "d",
    "e",
    "g",
    "c",
    "f",
  ]);
});

test("test_02", () => {
  const a = new Node("a");
  //      a

  expect(depthFirstValuesRecursive(a)).toEqual(["a"]);
});

test("test_03", () => {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");

  a.right = b;
  b.left = c;
  c.right = d;
  d.right = e;

  //      a
  //       \
  //        b
  //       /
  //      c
  //       \
  //        d
  //         \
  //          e

  expect(depthFirstValuesRecursive(a)).toEqual(["a", "b", "c", "d", "e"]);
});

test("test_04", () => {
  expect(depthFirstValuesRecursive(null)).toEqual([]);
});
