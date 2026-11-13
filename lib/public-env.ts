/**
 * Public values the app reads. They are baked into the Worker at build time,
 * so a build without them ships the wrong canonical URLs, sitemap and
 * OpenRouter referer.
 */
const REQUIRED_PUBLIC_ENV = ['NEXT_PUBLIC_SITE_URL'] as const;

/** Lists what is wrong with the build's public env; empty when it is fine. */
export function findPublicEnvProblems(
  env: Record<string, string | undefined>
): string[] {
  const problems: string[] = REQUIRED_PUBLIC_ENV.filter(
    (name) => !env[name]
  ).map((name) => `${name} is missing`);
  const siteUrl = env.NEXT_PUBLIC_SITE_URL;
  if (siteUrl && !siteUrl.startsWith('https://')) {
    problems.push(
      `NEXT_PUBLIC_SITE_URL must start with https:// (got ${siteUrl})`
    );
  }
  return problems;
}
