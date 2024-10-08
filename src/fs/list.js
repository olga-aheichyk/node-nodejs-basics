import fs from "node:fs";
import path from "node:path";
const dirname = import.meta.dirname;

const list = async () => {
  const folderPath = path.resolve(dirname, "./files");

  if (!fs.existsSync(folderPath)) {
    throw new Error("FS operation failed");
  }

  fs.readdir(folderPath, (err, data) => {
    if (err) throw new Error(err);
    console.log(data);
  });
};

await list();
