import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'credentials/**/*.credentials.ts',
    'nodes/**/*.node.ts',
    'shared/index.ts',
  ],
  outDir: 'dist',
  format: ['cjs'],
  target: 'node18',
  platform: 'node',
  sourcemap: true,
  clean: false,
  dts: false,
  splitting: false,
  treeshake: true,
  minify: false,
  // Bundle templating only; keep LangWatch SDK external so it isn't included in the n8n bundle
  noExternal: ['liquidjs'],
  // Keep n8n-provided packages external
  external: ['n8n-workflow'],
  // Preserve file structure
  shims: false,
  esbuildOptions(options) {
    options.drop = ['console'];
    options.define = { global: 'undefined' };
  },
});


