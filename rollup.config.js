import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import dts from 'rollup-plugin-dts';

const devMode = process.env.NODE_ENV === 'development';

const baseConfig = {
  input: 'src/index.ts',
  external: ['react', 'react-dom', 'antd-mobile'],
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false,
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: './dist',
    }),
    babel({
      exclude: 'node_modules/**',
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      babelHelpers: 'bundled',
    }),
    postcss({
      extract: true,
      minimize: !devMode,
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      preventAssignment: true,
    }),
  ],
};

const esmConfig = {
  ...baseConfig,
  output: {
    file: 'dist/index.esm.js',
    format: 'es',
    sourcemap: devMode,
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'antd-mobile': 'antd-mobile',
    },
  },
  plugins: [
    ...baseConfig.plugins,
    ...(devMode ? [] : [terser({
      ecma: 2020,
      mangle: { toplevel: true },
      compress: {
        module: true,
        toplevel: true,
        unsafe_arrows: true,
        drop_console: !devMode,
        drop_debugger: !devMode,
      },
      output: { quote_style: 1 },
    })]),
  ],
};

const cjsConfig = {
  ...baseConfig,
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    sourcemap: devMode,
    exports: 'named',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'antd-mobile': 'antd-mobile',
    },
  },
  plugins: [
    ...baseConfig.plugins,
    ...(devMode ? [] : [terser({
      ecma: 2020,
      mangle: { toplevel: true },
      compress: {
        module: true,
        toplevel: true,
        unsafe_arrows: true,
        drop_console: !devMode,
        drop_debugger: !devMode,
      },
      output: { quote_style: 1 },
    })]),
  ],
};

const typesConfig = {
  input: 'dist/index.d.ts',
  output: [{ file: 'dist/index.d.ts', format: 'es' }],
  plugins: [dts()],
  external: [/\.css$/],
};

export default [esmConfig, cjsConfig, typesConfig];