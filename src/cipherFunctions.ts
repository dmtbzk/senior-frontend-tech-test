export const handleCipher = (text: string, shift: number, direction: string): string => {
  const directionShift = direction === "forward" ? shift : -shift;
  return text.replace(/[A-Z]/gi, (char) => {
    const charCode = char.charCodeAt(0);
    const base = char >= "a" ? 97 : 65;
    const newCharCode = ((charCode - base + directionShift + 26) % 26) + base;
    return String.fromCharCode(newCharCode);
  });
};