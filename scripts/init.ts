import fse from "fs-extra";
import path from "node:path";

// const src = path.normalize("./assets");
// const src = path.join(__dirname, "./assets");
// const src = path.resolve("./assets/");
const src = path.resolve("scripts/assets/");
const des = path.resolve("src/");
// console.log(src, des);
// fse.copySync(src, des);

fse.copySync(path.resolve("scripts/assets/config"), path.resolve("src/config"));
fse.copySync(
  path.resolve("scripts/assets/content"),
  path.resolve("src/content"),
);
fse.copySync(
  path.resolve("scripts/assets/favicon"),
  path.resolve("public/favicon"),
);
fse.copySync(
  path.resolve("scripts/assets/.gitignore"),
  path.resolve(".gitignore"),
);

console.log("Theme initialized successfully!");
