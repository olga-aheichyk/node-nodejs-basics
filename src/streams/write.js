import fs from "fs";
import path from "path";
const dirname = import.meta.dirname;

const write = async () => {
  const filePath = path.resolve(dirname, "./files/fileToWrite.txt");
  const writableStream = fs.createWriteStream(filePath);

  process.stdin.pipe(writableStream);

  writableStream.on("finish", () => {
    console.log("Data has been written to fileToWrite.txt");
  });

  writableStream.on("error", (err) => {
    console.error(err.message);
  });
};

await write();
