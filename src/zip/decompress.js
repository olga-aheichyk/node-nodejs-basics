import path from "path";
import fs from "fs";
import zlib from "zlib";
const dirname = import.meta.dirname;

const decompress = async () => {
  const filePath = path.resolve(dirname, "./files/archive.gz");
  const decompressedFilePath = path.resolve(dirname, "./files/fileToCompress.txt"
  );

  const decompressedFile = zlib.createGunzip(filePath);

  const readableStream = fs.createReadStream(filePath);
  readableStream.on("error", (err) => {
    console.error(err.message);
  });

  const writableStream = fs.createWriteStream(decompressedFilePath);
  writableStream.on("error", (err) => {
    console.error(err.message);
  });

  readableStream.pipe(decompressedFile).pipe(writableStream);

  writableStream.on("finish", () => {
    console.log(
      "Decompressed data from archive.gz has been written to fileToCompress.txt"
    );
  });
};

await decompress();
