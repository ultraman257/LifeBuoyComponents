import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';

// Utility function to create different output configurations
const createConfig = (input, file, format) => ({
    input,
    output: [
        {
            file: `${file}.${format === 'cjs' ? 'cjs' : 'es.mjs'}`,
            format: format,
            interop: 'auto',
            sourcemap: true,
            generatedCode: {
                reservedNamesAsProps: false
            },
            globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
                'react/jsx-runtime': 'jsxRuntime' // Only needed if bundling with UMD or other formats in mind
            }
        }
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    plugins: [
        external(), // Exclude peerDependencies from the bundle
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
            targets: [
                { src: 'package.json', dest: 'dist', transform: (contents) => {
                    const packageJson = JSON.parse(contents.toString());
                    delete packageJson.scripts;
                    delete packageJson.devDependencies;
                    return JSON.stringify(packageJson, null, 2);
                } }
            ]
        }),
        commonjs(),
        terser()
    ]
});

export default [
    createConfig('src/components/index', 'dist/index', 'cjs'),
    createConfig('src/components/index', 'dist/index', 'es')
];
