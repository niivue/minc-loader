import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/lib/loader.js'],
  outDir: 'build',
  target: 'es2020',
  splitting: false,
  format: 'esm',
  sourcemap: true,
  clean: true,
  dts: true,
  metafile: true
})
