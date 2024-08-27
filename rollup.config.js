import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
// import { dts } from 'rollup-plugin-dts';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';

const createConfig = (input, file, format) => ({
    input,
    output: [
        format === 'cjs'
            ? {
                  file: `${file}.cjs`,
                  format: 'cjs',
                  interop: 'auto',
                  sourcemap: true,
                  generatedCode: {
                      reservedNamesAsProps: false
                  }
              }
            : {
                  file: `${file}.es.mjs`,
                  format: 'esm',
                  interop: 'auto',
                  sourcemap: true,
                  generatedCode: {
                      reservedNamesAsProps: false
                  }
              }
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    plugins: [
        external(),
        resolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            browser: true,
            preferBuiltins: false
        }),
        typescript(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),
        postcss({
            extensions: ['.css']
        }),
        copy({
            targets: [{ src: 'package.json', dest: 'dist' }]
        }),
        commonjs(),
        terser()
    ]
});

// add this back in to support types
// const dynamicDtsConfig = (src, dest) => ({
//   input: src,
//   output: { file: dest, format: 'es' },
//   plugins: [dts()],
// });

export default [
    createConfig('src/components/index', 'dist/index', 'cjs'),
    createConfig('src/components/index', 'dist/index', 'es')
    // dynamicDtsConfig('src/components/index.ts', 'dist/index.d.ts'),
];
