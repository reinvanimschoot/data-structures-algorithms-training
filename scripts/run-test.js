#!/usr/bin/env node

const fs = require("fs");
const fsp = fs.promises;
const path = require("path");
var camelCase = require("lodash.camelcase");
const { spawnSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const EXERCISE_ROOT = path.resolve(__dirname, "..", "exercises");

const CATEGORY = process.argv[2];
const EXERCISE = process.argv[3];

if (!EXERCISE || !CATEGORY) {
  console.error("Usage: yarn test <category-name> <exercise-name>");

  process.exit(1);
}

async function pathExists(p) {
  try {
    await fsp.access(p, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
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
  const categoryDir = path.join(EXERCISE_ROOT, CATEGORY);

  if (!(await pathExists(categoryDir))) {
    console.error(`No folder named "${CATEGORY}" found at ${categoryDir}`);

    process.exit(1);
  }

  const exerciseDir = path.join(categoryDir, EXERCISE);

  if (!exerciseDir) {
    console.error(`No folder named "${EXERCISE}" found at ${categoryDir}`);

    process.exit(1);
  }

  const jsDir = path.join(exerciseDir, "javascript");

  if (!(await pathExists(jsDir))) {
    console.error(
      `Found "${EXERCISE}" but it has no "javascript" subfolder: ${jsDir}`
    );

    process.exit(1);
  }

  const entries = await fsp.readdir(jsDir);

  const fileName = camelCase(EXERCISE);

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
      `No test file found. Expected "${EXERCISE}.test.js" or any "*.test.js" in ${jsDir}`
    );
    process.exit(1);
  }

  console.log("TEST FILE", testFile);

  const vitestBin = path.join(ROOT, "node_modules", ".bin", "vitest");

  if (fs.existsSync(vitestBin)) {
    return run(vitestBin, ["--watch", testFile], ROOT);
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
