import fs from 'fs';
import path from 'path';
const dirname = import.meta.dirname;

const read = async () => {
    const filePath = path.resolve(dirname, './files/fileToRead.txt');

    const readableStream = fs.createReadStream(filePath);

    // readableStream.on('data', (chunk) => {
    //     console.log(chunk);
    // });

    readableStream.on('error', (err) => {
        console.error(err.message);
    });

    readableStream.pipe(process.stdout);
};

await read();