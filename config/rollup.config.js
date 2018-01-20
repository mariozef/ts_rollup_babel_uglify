import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

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
        commonjs(),
        babel({
            exclude: 'node_modules/**',
        })
    ]
}]