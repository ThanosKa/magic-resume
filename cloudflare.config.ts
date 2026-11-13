import { bindings, defineConfig, defineWorker } from 'cf/config';

export default defineConfig({
  worker: defineWorker({
    name: 'magic-resume',
    entrypoint: 'vinext/server/fetch-handler',
    compatibilityDate: '2026-11-07',
    compatibilityFlags: ['nodejs_compat'],
    observability: { enabled: true },
    domains: ['magik-resume.dev'],
    // Keep workersDev on: declaring a domain would otherwise switch it off.
    workersDev: true,
    assets: {
      htmlHandling: 'none',
      notFoundHandling: 'none',
      runWorkerFirst: ['/*', '!/_next/static/*', '!/*/_next/static/*'],
    },
    env: {
      ASSETS: bindings.assets(),
      // Only declared names reach the Worker's process.env. Values come from
      // .env.<mode>.local locally and from Worker secrets once deployed.
      LOG_LEVEL: bindings.secret(),
      OPENROUTER_API_KEY: bindings.secret(),
    },
  }),
});
