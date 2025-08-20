import { expect, test } from "vitest";

import { isUnivalueList } from "./isUnivalueList";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

test("test_00", () => {
  const a = new Node(7);
  const b = new Node(7);
  const c = new Node(7);

  a.next = b;
  b.next = c;

  expect(isUnivalueList(a)).toBeTruthy();
});

test("test_01", () => {
  const a = new Node(7);
  const b = new Node(7);
  const c = new Node(4);

  a.next = b;
  b.next = c;

  expect(isUnivalueList(a)).toBeFalsy();
});

test("test_02", () => {
  const u = new Node(2);
  const v = new Node(2);
  const w = new Node(2);
  const x = new Node(2);
  const y = new Node(2);

  u.next = v;
  v.next = w;
  w.next = x;
  x.next = y;

  expect(isUnivalueList(u)).toBeTruthy();
});

test("test_03", () => {
  const u = new Node(2);
  const v = new Node(2);
  const w = new Node(3);
  const x = new Node(3);
  const y = new Node(2);

  u.next = v;
  v.next = w;
  w.next = x;
  x.next = y;

  expect(isUnivalueList(u)).toBeFalsy();
});

test("test_04", () => {
  const z = new Node("z");

  expect(isUnivalueList(z)).toBeTruthy();
});

test("test_05", () => {
  const u = new Node(2);
  const v = new Node(1);
  const w = new Node(2);
  const x = new Node(2);
  const y = new Node(2);

  u.next = v;
  v.next = w;
  w.next = x;
  x.next = y;

  expect(isUnivalueList(u)).toBeFalsy();
});
