import { expect, test } from "vitest";
import { treeMinValue } from "./treeMinValue";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

test("test_00", () => {
  const a = new Node(3);
  const b = new Node(11);
  const c = new Node(4);
  const d = new Node(4);
  const e = new Node(-2);
  const f = new Node(1);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  //       3
  //    /    \
  //   11     4
  //  / \      \
  // 4   -2     1

  expect(treeMinValue(a)).toEqual(-2);
});

test("test_01", () => {
  const a = new Node(5);
  const b = new Node(11);
  const c = new Node(3);
  const d = new Node(4);
  const e = new Node(14);
  const f = new Node(12);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  //       5
  //    /    \
  //   11     3
  //  / \      \
  // 4   14     12

  expect(treeMinValue(a)).toEqual(3);
});

test("test_02", () => {
  const a = new Node(-1);
  const b = new Node(-6);
  const c = new Node(-5);
  const d = new Node(-3);
  const e = new Node(-4);
  const f = new Node(-13);
  const g = new Node(-2);
  const h = new Node(-2);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;
  f.right = h;

  //        -1
  //      /   \
  //    -6    -5
  //   /  \     \
  // -3   -4   -13
  //     /       \
  //    -2       -2

  expect(treeMinValue(a)).toEqual(-13);
});

test("test_03", () => {
  const a = new Node(42);
  //        42

  expect(treeMinValue(a)).toEqual(42);
});
