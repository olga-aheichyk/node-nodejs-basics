import fs from 'fs';
import path from 'path';
const dirname = import.meta.dirname;

const create = async () => {
    const filePath = path.resolve(dirname, "./files", "fresh.txt");

    if (fs.existsSync(filePath)) {
      throw new Error("FS operation failed");
    }

    fs.writeFile(filePath, "I am fresh and young", (err) => {
      if (err) new Error(err);
      console.log("File created successfully");
    });
};

await create();