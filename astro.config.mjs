import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://devopsharshan.farmfresh.click',
  output: 'static',
  build: {
    assets: '_assets'
  }
});
