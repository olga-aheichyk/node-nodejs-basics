import fs from "node:fs";
import path from "node:path";
const dirname = import.meta.dirname;

const read = async () => {
  const filePath = path.resolve(dirname, "./files/fileToRead.txt");

  if (!fs.existsSync(filePath)) {
    throw new Error("FS operation failed");
  }

  fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    if (err) throw new Error(err);
    console.log(data);
  });
};

await read();
