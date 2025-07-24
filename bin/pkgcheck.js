#!/usr/bin/env node

import fs from 'fs';
import { parsePackageJson } from '../lib/parser.js';
import { checkLicenses } from '../lib/license-checker.js';
import { parseRequirements } from '../lib/parser-py.js';

const args = process.argv.slice(2);

let filePath;

if (args[0]) {
  filePath = args[0];
} else if (fs.existsSync('./package.json')) {
  filePath = './package.json';
} else if (fs.existsSync('./requirements.txt')) {
  filePath = './requirements.txt';
} else {
  console.error('No package.json or requirements.txt found in current directory.');
  process.exit(1);
}

if (filePath.endsWith('package.json')) {
  const deps = parsePackageJson(filePath);
  await checkLicenses(deps, 'node');
} else if (filePath.endsWith('requirements.txt')) {
  const pyDeps = parseRequirements(filePath);
  await checkLicenses(pyDeps, 'python');
} else {
  console.error('Unsupported file type. Please use package.json or requirements.txt');
}
