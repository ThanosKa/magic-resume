import { describe, test, expect } from 'vitest';
import { generateId } from './cv';

describe('generateId', () => {
  test('should generate a valid ID string', () => {
    const id = generateId();
    expect(id).toBeDefined();
    expect(typeof id).toBe('string');
    expect(id.length).toBeGreaterThan(0);
  });

  test('should generate unique IDs', () => {
    const id1 = generateId();
    const id2 = generateId();
    const id3 = generateId();

    expect(id1).not.toBe(id2);
    expect(id2).not.toBe(id3);
    expect(id1).not.toBe(id3);
  });

  test('should generate IDs with correct format (timestamp-random)', () => {
    const id = generateId();
    const parts = id.split('-');

    // Should have at least 2 parts: timestamp and random string
    expect(parts.length).toBeGreaterThanOrEqual(2);

    // First part should be a number (timestamp)
    const timestamp = Number(parts[0]);
    expect(Number.isNaN(timestamp)).toBe(false);
    expect(timestamp).toBeGreaterThan(0);

    // Second part should be a random string
    expect(parts[1]).toBeDefined();
    expect(parts[1]!.length).toBeGreaterThan(0);
  });

  test('should generate IDs with increasing timestamps', () => {
    const id1 = generateId();
    // Small delay to ensure different timestamp
    const delay = new Promise((resolve) => setTimeout(resolve, 5));
    return delay.then(() => {
      const id2 = generateId();
      const timestamp1 = Number(id1.split('-')[0]);
      const timestamp2 = Number(id2.split('-')[0]);

      expect(timestamp2).toBeGreaterThanOrEqual(timestamp1);
    });
  });
});
