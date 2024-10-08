import fs from "node:fs";
import path from 'node:path';
const dirname = import.meta.dirname;

const rename = async () => {
    const wrongFileNamePath = path.resolve(dirname, "./files/wrongFilename.txt");
    const properFileNamePath = path.resolve(dirname, "./files/properFilename.md");

    if (
      !fs.existsSync(wrongFileNamePath) ||
      fs.existsSync(properFileNamePath)
    ) {
      throw new Error("FS operation failed");
    }

    fs.rename(wrongFileNamePath, properFileNamePath, (err) => {
      if (err) throw new Error(err);
      console.log("Rename completed");
    });
};

await rename();
