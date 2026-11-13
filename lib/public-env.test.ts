import { describe, expect, it } from 'vitest';
import { findPublicEnvProblems } from './public-env';

describe('findPublicEnvProblems', () => {
  it('accepts an https site URL', () => {
    expect(
      findPublicEnvProblems({
        NEXT_PUBLIC_SITE_URL: 'https://magik-resume.dev',
      })
    ).toEqual([]);
  });

  it('reports a missing site URL', () => {
    expect(findPublicEnvProblems({})).toEqual([
      'NEXT_PUBLIC_SITE_URL is missing',
    ]);
  });

  it('reports a site URL that is not https', () => {
    expect(
      findPublicEnvProblems({ NEXT_PUBLIC_SITE_URL: 'http://localhost:3000' })
    ).toEqual([
      'NEXT_PUBLIC_SITE_URL must start with https:// (got http://localhost:3000)',
    ]);
  });
});
