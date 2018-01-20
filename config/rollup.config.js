import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default [{
    input: 'out/index.js',
    output: {
        name: 'ts_rollup_babel',
        format: 'umd',
        file: 'dist/index.bundle.es2015.js'
    },
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs()
    ]
}]