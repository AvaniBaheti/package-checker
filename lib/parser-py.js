import fs from 'fs';

export function parseRequirements(path) {
  const content = fs.readFileSync(path, 'utf-8');
  const lines = content.split('\n');

  const packages = lines
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#'))
    .map(line => line.split('==')[0]);

  return packages;
}
