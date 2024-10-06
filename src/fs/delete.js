import fs from "node:fs";
import path from "node:path";
const dirname = import.meta.dirname;

const remove = async () => {
  const filePath = path.resolve(dirname, "./files/fileToRemove.txt");

  if (!fs.existsSync(filePath)) {
    throw new Error("FS operation failed");
  }

  fs.unlink(filePath, (err) => {
    if (err) throw new Error(err);
    console.log("File removed successfully!");
  });
};

await remove();
