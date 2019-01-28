/* eslint-disable import/no-commonjs */
const gulp = require('gulp');
const alias = require('mycrypto-path-alias-resolver/gulp');
const rollup = require('rollup');
const sourceMaps = require('rollup-plugin-sourcemaps');
const typescript = require('rollup-plugin-typescript2');
const url = require('rollup-plugin-url');

const pkg = require('./package.json');

/**
 * Include all of the dependencies here to exclude all node modules from the build
 * Make sure to also include node libraries you're using e.g. 'crypto'
 */

const external = [
  ...Object.keys(pkg.dependencies),
  ...Object.keys(pkg.peerDependencies),
];

const input = {
  input: 'src/index.ts',

  // exclude all node modules
  external,

  plugins: [
    // Bundle images
    url(),

    // Compile TypeScript files
    typescript(),

    // Resolve source maps to the original source
    sourceMaps(),
  ],
};

const output = { file: pkg.module, format: 'es', sourcemap: true };

gulp.task('build', async function() {
  const bundle = await rollup.rollup(input);
  await bundle.write(output);
});

gulp.task('default', ['build'], () => {
  return gulp
    .src([
      './src/**/*.ts',
      './src/**/*.tsx',
      '!./src/**/*.spec.ts',
      '!./src/**/*.test.ts',
    ])
    .pipe(alias('.', { src: './src' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
  rollup.watch({
    ...input,
    output,
    watch: {
      include: 'src/**',
    },
  });
  gulp.watch('dist', ['default']);
});
