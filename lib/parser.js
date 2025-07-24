import fs from 'fs';

export function parsePackageJson(path) {
  const raw = fs.readFileSync(path);
  const json = JSON.parse(raw);

  return {
    ...json.dependencies,
    ...json.devDependencies,
  };
}
