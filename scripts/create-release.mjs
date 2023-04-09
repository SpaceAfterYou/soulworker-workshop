import { exec } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { SemVer } from "semver";

const packageJson = JSON.parse(await readFile("./package.json", "utf-8"));
const tauriConfJson = JSON.parse(await readFile("src-tauri/tauri.conf.json", "utf-8"));

let ver = new SemVer(packageJson.version);

const [_1, _2, type] = process.argv;

switch (type) {
  // major
  case "maj":
  case "major":
    ver = new SemVer(`${ver.major + 1}.0.0`);
    break;

  // minor
  case "min":
  case "minor":
    ver = new SemVer(`${ver.major}.${ver.minor + 1}.0`);
    break;

  // patch
  case "pat":
  case "patch":
    ver = new SemVer(`${ver.major}.${ver.minor}.${ver.patch + 1}`);
    break;

  default:
    throw new Error("use one of: maj (major), min (minor), pat (patch)");
}

packageJson.version = ver.raw;
tauriConfJson.package.version = ver.raw;

await writeFile("./package.json", JSON.stringify(packageJson), "utf-8");
await writeFile("src-tauri/tauri.conf.json", JSON.stringify(tauriConfJson), "utf-8");

class ExecAsync {
  execCommand(cmd) {
    return new Promise((resolve, reject) => {
      exec(cmd, (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(stdout);
      });
    });
  }
}

const os = new ExecAsync();

console.log(await os.execCommand("pnpx prettier --write package.json"));
console.log(await os.execCommand("pnpx prettier --write src-tauri/tauri.conf.json"));

console.log(await os.execCommand("git add package.json src-tauri/tauri.conf.json"));

console.log(await os.execCommand('git commit -m  "🚀 chore(package.json): bump version"'));
console.log(await os.execCommand(`git tag v${ver.raw}`));
