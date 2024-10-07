import { Transform } from 'stream';

class ReverseStream extends Transform {
    constructor() {
        super();
    }

    _transform(chunk, encoding, callback) {
        const reversedChunk = chunk.toString().split("").reverse().join("");
        this.push(reversedChunk);
        callback();
    }
}

const transform = async () => {
    const transformStream = new ReverseStream();

    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();