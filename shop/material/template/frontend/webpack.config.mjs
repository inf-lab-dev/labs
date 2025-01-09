import path from 'node:path';
import { fileURLToPath } from 'node:url';

export default {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'frontend-provided.js',
        path: path.resolve(
            path.dirname(fileURLToPath(import.meta.url)),
            'dist'
        ),
    },
    experiments: {
        outputModule: true,
    },
};
