import { appTools, defineConfig } from '@modern-js/app-tools';
import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
    state: true,
  },
  server: {
    // ssr: true,
    // ssrByEntries: {
    //   'landing-page': false,
    // },
  },
  output: {
    polyfill: 'usage',
  },
  plugins: [appTools(), tailwindcssPlugin()],
});
