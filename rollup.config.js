import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

export default {
  input: 'src/index',
  output: { file: pkg.module, format: 'es' },
  external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)],
  plugins: [resolve(), postcss(), babel({ exclude: 'node_modules/**' })]
};
