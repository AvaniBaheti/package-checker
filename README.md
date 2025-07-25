# pkgcheck

A simple, fast CLI tool to **scan your project's dependencies** for risky open-source licenses — now supports both Node.js (`package.json`) and Python (`requirements.txt`)!

---

## Features

- Scans licenses from `package.json` or `requirements.txt`
- Warns about risky/open-source-restrictive licenses
- Supports both npm and PyPI registries
- Color-coded terminal output
- Works with just one command: `pkgcheck`

---

## Installation

Clone the project:

```bash
git clone https://github.com/AvaniBaheti/package-checker.git
cd pkgcheck
npm install
npm link
