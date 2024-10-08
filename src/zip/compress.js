import path from "path";
import fs from "fs";
import zlib from 'zlib';
const dirname = import.meta.dirname;

const compress = async () => {
    const filePath = path.resolve(dirname, './files/fileToCompress.txt');
    const compressedFilePath = path.resolve(dirname, "./files/archive.gz");

    const compressedFile = zlib.createGzip(filePath);

    const readableStream = fs.createReadStream(filePath);
    readableStream.on("error", (err) => {
      console.error(err.message);
    });

    const writableStream = fs.createWriteStream(compressedFilePath);
    writableStream.on("error", (err) => {
      console.error(err.message);
    });

    readableStream.pipe(compressedFile).pipe(writableStream);

    writableStream.on("finish", () => {
      console.log(
        "Compressed data from fileToCompress.txt has been written to archive.gz"
      );
    });

};

await compress();