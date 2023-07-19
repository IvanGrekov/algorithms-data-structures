import fs from 'fs';
import path from 'path';

export default function getData(): number[] {
    return [
        ...new Set(
            new Array(1_000_000)
                .fill(0)
                .map(() => Math.floor(Math.random() * 1_000_000))
                .sort((a, b) => a - b)
        ).keys()
    ];
}

fs.writeFile(
    path.resolve(__dirname, 'array.js'),
    `export default ${JSON.stringify(getData())};`,
    () => {}
)
