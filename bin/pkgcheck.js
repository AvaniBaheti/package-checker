#!/usr/bin/env node

import { parsePackageJson } from '../lib/parser.js';
import { checkLicenses } from '../lib/license-checker.js';

const args = process.argv.slice(2); 
const filePath = args[0] || './package.json'; 
const deps = parsePackageJson(filePath);
await checkLicenses(deps);