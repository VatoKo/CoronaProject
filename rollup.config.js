import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';

const config = {
    input: `public/app-root.js`,
    output: {
        dir: `dist`,
        format: 'es',
    },
    plugins: [
        copy({
            targets: [
                { src: `public/index.html`, dest: 'dist'},
            ],
        }),
        resolve(),
    ],
    preserveEntrySignatures: false,
    watch: {},
};

export default config;