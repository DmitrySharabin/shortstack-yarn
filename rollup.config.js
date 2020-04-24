import resolve from '@rollup/plugin-node-resolve'
import auto from '@rollup/plugin-auto-install'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import compiler from '@ampproject/rollup-plugin-closure-compiler'
import { default as importHTTP } from 'import-http/rollup'
import babel from 'rollup-plugin-babel'

const isProd = process.env.NODE_ENV === 'production'

const devConfig = {
  input: 'src/js/index.js',
  output: {
    file: 'src/bundle.js',
    format: 'esm',
    sourcemap: 'inline',
  },
  plugins: [
    auto(),
    resolve(),
    importHTTP(),
    postcss({
      inject:  false,
    }),
    babel({
      exclude: 'node_modules/**',
      "presets": [
        ["@babel/env", {
          targets: { esmodules: true },
          bugfixes: true,
        }]
      ]
    }),
  ],
  watch: {
    exclude: ['node_modules/**'],
  }
}

const prodConfig = {
  input: 'src/js/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    importHTTP(),
    postcss({
      extract: true,
      minimize: { preset: 'default' },
    }),
    babel({
      exclude: 'node_modules/**',
      "presets": [
        ["@babel/env", {"modules": false}]
      ]
    }),
    compiler(),
    terser(),
  ]
}

export default isProd ? prodConfig : devConfig
