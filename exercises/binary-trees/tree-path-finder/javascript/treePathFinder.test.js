import { expect, test } from "vitest";
import { treePathFinder } from "./treePathFinder";

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

  expect(treePathFinder(a, "e")).toEqual(["a", "b", "e"]);
});

test("test_01", () => {
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

  expect(treePathFinder(a, "p")).toEqual(null);
});

test("test_02", () => {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");
  const g = new Node("g");
  const h = new Node("h");

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;
  f.right = h;

  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f
  //    /       \
  //   g         h

  expect(treePathFinder(a, "c")).toEqual(["a", "c"]);
});

test("test_03", () => {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");
  const g = new Node("g");
  const h = new Node("h");

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;
  f.right = h;

  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f
  //    /       \
  //   g         h

  expect(treePathFinder(a, "h")).toEqual(["a", "c", "f", "h"]);
});

test("test_04", () => {
  const x = new Node("x");

  //      x

  expect(treePathFinder(x, "x")).toEqual(["x"]);
});

test("test_05", () => {
  expect(treePathFinder(null, "x")).toEqual(null);
});

test("test_06", () => {
  const root = new Node(0);
  let curr = root;
  for (let i = 1; i <= 6000; i += 1) {
    curr.right = new Node(i);
    curr = curr.right;
  }

  //      0
  //       \
  //        1
  //         \
  //          2
  //           \
  //            3
  //             .
  //              .
  //               .
  //              5999
  //                \
  //                6000

  expect(treePathFinder(root, 3451)).toEqual([...Array(3452).keys()]);
});
