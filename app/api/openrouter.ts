// Shared OpenRouter configuration. The one place to change the model for
// AI Polish and PDF import.
//
// Both are free OpenRouter models, tested on CV extraction in November 2026.
// OpenRouter tries OPENROUTER_MODEL first and falls back to the next entry in
// OPENROUTER_MODELS when the first is rate-limited or unavailable.
export const OPENROUTER_MODEL = 'nvidia/nemotron-3-ultra-550b-a55b:free';

export const OPENROUTER_MODELS = [
  OPENROUTER_MODEL,
  'nvidia/nemotron-3.5-super-vl:free',
];
