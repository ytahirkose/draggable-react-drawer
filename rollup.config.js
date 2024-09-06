import {terser} from "rollup-plugin-terser";
import babel from 'rollup-plugin-babel';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from 'rollup-plugin-postcss';

const devMode = process.env.NODE_ENV === "development";

export default [
    {
        input: 'src/index.js',
        output: {
            file: 'lib/index.js',
            format: 'es',
            sourcemap: devMode ? 'inline' : false,
            plugins: [
                terser({
                    ecma: 2020,
                    mangle: {toplevel: true},
                    compress: {
                        module: true,
                        toplevel: true,
                        unsafe_arrows: true,
                        drop_console: devMode,
                        drop_debugger: devMode
                    },
                    output: {quote_style: 1},
                }),
                babel({
                    exclude: 'node_modules/**',
                    presets: ['@babel/env', '@babel/preset-react']
                })
            ],
            external: [
                'react',
                'prop-types',
            ],
            globals: {
                react: "React"
            }
        },
        plugins: [
            resolve(),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/env', '@babel/preset-react']
            }),
            postcss({
                // Enable processing of imported CSS files
                extract: true, // This extracts the CSS into a separate file
            }),
            commonjs()
        ],
        external: [
            'react',
            'prop-types',
        ],
        globals: {
            react: "React"
        }
    }
]
