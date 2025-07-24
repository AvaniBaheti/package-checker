import axios from 'axios';
import chalk from 'chalk';
import ora from 'ora';
import risky from '../utils/riskyLicenses.js';

export async function checkLicenses(deps) {
  const spinner = ora("Checking licenses...").start();

  for (const pkg in deps) {
    try {
      const { data } = await axios.get(`https://registry.npmjs.org/${pkg}`);
      const latest = data["dist-tags"].latest;
      const license = data.versions[latest].license;

      const isRisky = license && risky.includes(license.toUpperCase());

      const status = isRisky
        ? chalk.red(`[RISK] ${pkg} → ${license}`)
        : chalk.green(`[OK]   ${pkg} → ${license || "unknown"}`);

      console.log(status);
    } catch (err) {
      console.log(chalk.yellow(`[WARN] ${pkg} → license lookup failed`));
    }
  }

  spinner.succeed("License check complete.");
}
