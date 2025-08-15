#!/usr/bin/env node

const fs = require("fs");
const fsp = fs.promises;
const path = require("path");
var camelCase = require("lodash.camelcase");
const { spawnSync } = require("child_process");

const TARGET = process.argv[2];

if (!TARGET) {
  console.error("Usage: yarn test <exercise-name>");
  process.exit(1);
}

const ROOT = path.resolve(__dirname, "..");

const IGNORES = new Set(["node_modules", ".git"]);

async function pathExists(p) {
  try {
    await fsp.access(p, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function* walk(dir) {
  const entries = await fsp.readdir(dir, { withFileTypes: true });

  for (const e of entries) {
    if (IGNORES.has(e.name)) continue;

    const full = path.join(dir, e.name);

    if (e.isDirectory()) {
      yield full;
      yield* walk(full);
    }
  }
}

async function findExerciseDir(root, name) {
  for await (const d of walk(root)) {
    if (path.basename(d) === name) return d;
  }
  return null;
}

function run(cmd, args, cwd) {
  const res = spawnSync(cmd, args, {
    stdio: "inherit",
    cwd,
    shell: process.platform === "win32",
  });
  process.exit(res.status ?? 1);
}

(async () => {
  const exerciseDir = await findExerciseDir(ROOT, TARGET);

  if (!exerciseDir) {
    console.error(`Couldn’t find a folder named "${TARGET}" under ${ROOT}`);
    process.exit(1);
  }

  const jsDir = path.join(exerciseDir, "javascript");

  if (!(await pathExists(jsDir))) {
    console.error(
      `Found "${TARGET}" but it has no "javascript" subfolder: ${jsDir}`
    );

    process.exit(1);
  }

  const entries = await fsp.readdir(jsDir);

  const fileName = camelCase(TARGET);

  const preferred = path.join(jsDir, `${fileName}.test.js`);

  let testFile = null;

  if (entries.includes(`${fileName}.test.js`)) {
    testFile = preferred;
  } else {
    const anyTest = entries.find((f) => /\.test\.js$/i.test(f));

    if (anyTest) testFile = path.join(jsDir, anyTest);
  }

  if (!testFile || !(await pathExists(testFile))) {
    console.error(
      `No test file found. Expected "${TARGET}.test.js" or any "*.test.js" in ${jsDir}`
    );
    process.exit(1);
  }

  const vitestBin = path.join(ROOT, "node_modules", ".bin", "vitest");

  if (fs.existsSync(vitestBin)) {
    return run(vitestBin, ["--watch", testFile], ROOT);
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
