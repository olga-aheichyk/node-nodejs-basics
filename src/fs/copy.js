import fs from "fs";
import path from "path";
const dirname = import.meta.dirname;

const copy = async () => {
  const srcPath = path.resolve(dirname, './files');
  const destPath = path.resolve(dirname, "./files_copy");

  if (!fs.existsSync(srcPath) || fs.existsSync(destPath)) {
    throw new Error("FS operation failed");
  }

  fs.cp(srcPath, destPath, {recursive: true}, (err) => {
    if (err) throw new Error(err);
    console.log("Folder 'files' copied successfully");
  })
};

await copy();
