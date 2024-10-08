import path from 'path';
import fs from 'fs';
import { createHash } from 'crypto';
const dirname = import.meta.dirname;

const calculateHash = async () => {
    const filePath = path.resolve(dirname, "./files/fileToCalculateHashFor.txt");

    const readableStream = fs.createReadStream(filePath);

    readableStream.on("error", (err) => {
      console.error(err.message);
    });

    const hash = createHash('sha256');

    readableStream.pipe(hash);
    hash.setEncoding('hex');

    hash.on('finish', () => {
        console.log(`Hash hex value is ${hash.read()}`)
    })
}

await calculateHash();