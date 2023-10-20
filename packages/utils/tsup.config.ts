import {defineConfig} from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  // TODO: Get from `tsconfig.json`.
  target: 'esnext',
  format: 'esm',
  sourcemap: true,
  onSuccess: 'tsc --project ./tsconfig.build.json'
});
