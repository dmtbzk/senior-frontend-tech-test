import { handleCipher } from './cipherFunctions';

describe('handleCipher Function', () => {
  it('should correctly cipher text with forward direction', () => {
    const result = handleCipher('abc', 1, 'forward');
    expect(result).toBe('bcd');
  });

  it('should correctly cipher text with backward direction', () => {
    const result = handleCipher('bcd', 1, 'backward');
    expect(result).toBe('abc');
  });

  it('should wrap around the alphabet', () => {
    const result = handleCipher('xyz', 3, 'forward');
    expect(result).toBe('abc');
  });

  it('should handle uppercase letters', () => {
    const result = handleCipher('XYZ', 3, 'forward');
    expect(result).toBe('ABC');
  });

  it('should correctly cipher with large shifts', () => {
    const result = handleCipher('abc', 27, 'forward'); 
    expect(result).toBe('bcd');
  });
});
