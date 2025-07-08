import fse from "fs-extra";
import path from "node:path";
import { execSync } from "node:child_process";

const itemsToCopy = [
  ".git/",
  "public/favicon/",
  "src/config/",
  "src/content/",
  "src/content_moments/",
  ".gitignore",
];
const cwd = process.cwd();
const basename = path.basename(cwd);
const updateDir = path.join(cwd, basename);

if (fse.existsSync(updateDir)) {
  fse.removeSync(updateDir);
}
execSync(
  `pnpm create astro@latest ${basename} --template Liksone/astro-theme-sora#dev --install --no-git`,
  { stdio: "inherit" },
);

itemsToCopy.forEach((item) => {
  fse.copySync(path.join(cwd, item), path.join(updateDir, item));
});

fse.moveSync(updateDir, path.join(path.dirname(cwd), `${basename}_up`));
fse.removeSync(cwd);
fse.renameSync(path.join(path.dirname(cwd), `${basename}_up`), cwd);

console.log("Update completed!");
