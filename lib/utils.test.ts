import { describe, test, expect } from 'vitest';
import { cn } from './utils';

describe('cn utility function', () => {
  test('should merge class names', () => {
    const result = cn('class1', 'class2', 'class3');
    expect(result).toBe('class1 class2 class3');
  });

  test('should handle conditional classes', () => {
    const result = cn('base', true && 'truthy', false && 'falsy');
    expect(result).toBe('base truthy');
  });

  test('should filter out falsy values', () => {
    const result = cn('base', null, undefined, false, '', 'valid');
    expect(result).toBe('base valid');
  });

  test('should merge Tailwind classes correctly', () => {
    const result = cn('px-2 py-1', 'px-4');
    expect(result).toBe('py-1 px-4');
  });

  test('should handle array inputs', () => {
    const result = cn(['class1', 'class2'], 'class3');
    expect(result).toBe('class1 class2 class3');
  });

  test('should handle object inputs', () => {
    const result = cn({
      base: true,
      active: true,
      disabled: false,
    });
    expect(result).toBe('base active');
  });

  test('should handle complex mixed inputs', () => {
    const isActive = true;
    const isDisabled = false;
    const result = cn(
      'base-class',
      isActive && 'active',
      isDisabled && 'disabled',
      { 'extra-class': true }
    );
    expect(result).toBe('base-class active extra-class');
  });

  test('should return empty string for no inputs', () => {
    const result = cn();
    expect(result).toBe('');
  });

  test('should handle undefined and null safely', () => {
    const result = cn(undefined, null, 'valid-class');
    expect(result).toBe('valid-class');
  });
});
