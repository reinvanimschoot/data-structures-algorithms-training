import { expect, test } from "vitest";

import { mergeLists } from "./mergeLists";
import { listValues } from "../../list-values/javascript/listValues";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

test("test_00", () => {
  const a = new Node(5);
  const b = new Node(7);
  const c = new Node(10);
  const d = new Node(12);
  const e = new Node(20);
  const f = new Node(28);
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;

  const q = new Node(6);
  const r = new Node(8);
  const s = new Node(9);
  const t = new Node(25);
  q.next = r;
  r.next = s;
  s.next = t;

  expect(listValues(mergeLists(a, q))).toEqual([
    5, 6, 7, 8, 9, 10, 12, 20, 25, 28,
  ]);
});

test("test_01", () => {
  const a = new Node(5);
  const b = new Node(7);
  const c = new Node(10);
  const d = new Node(12);
  const e = new Node(20);
  const f = new Node(28);
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;

  const q = new Node(1);
  const r = new Node(8);
  const s = new Node(9);
  const t = new Node(10);
  q.next = r;
  r.next = s;
  s.next = t;

  expect(listValues(mergeLists(a, q))).toEqual([
    1, 5, 7, 8, 9, 10, 10, 12, 20, 28,
  ]);
});

test("test_02", () => {
  const h = new Node(30);

  const p = new Node(15);
  const q = new Node(67);
  p.next = q;

  expect(listValues(mergeLists(h, p))).toEqual([15, 30, 67]);
});
