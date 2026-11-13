import { defineConfig, loadEnv } from 'vite';
import vinext from 'vinext';
import { cloudflare } from '@cloudflare/vite-plugin';
import { findPublicEnvProblems } from './lib/public-env';

export default defineConfig(({ command, mode }) => {
  // NEXT_PUBLIC_* values are baked in here, so a Worker build without them
  // (no .env.production.local) must stop instead of shipping a broken site.
  if (command === 'build') {
    const problems = findPublicEnvProblems(
      loadEnv(mode, process.cwd(), 'NEXT_PUBLIC_')
    );
    if (problems.length > 0) {
      throw new Error(
        `Worker build stopped, fix .env.${mode}.local:\n- ${problems.join('\n- ')}`
      );
    }
  }

  return {
    plugins: [
      // next.config.mjs sets images.unoptimized, so no image optimizer binding.
      vinext(),
      cloudflare({
        viteEnvironment: {
          name: 'rsc',
          childEnvironments: ['ssr'],
        },
      }),
    ],
  };
});
