import React, { useState } from "react";

const CaesarCipher: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [shift, setShift] = useState<number>(1);
  const [result, setResult] = useState<string>("");
  const [direction, setDirection] = useState<string>("forward");

  const handleCipher = (
    text: string,
    shift: number,
    direction: string
  ): void => {
    const directionShift = direction === "forward" ? shift : -shift;
    const output = text.replace(/[A-Z]/gi, (char) => {
      const charCode = char.charCodeAt(0);
      const base = char >= "a" ? 97 : 65;
      const newCharCode = ((charCode - base + directionShift + 26) % 26) + base;
      return String.fromCharCode(newCharCode);
    });
    setResult(output);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCipher(text, shift, direction);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value.replace(/[^a-z]/gi, ""))}
        placeholder="Enter text"
      />
      <input
        type="number"
        value={shift}
        onChange={(e) => setShift(parseInt(e.target.value))}
        min="1"
        max="25"
        placeholder="Shift"
      />
      <select value={direction} onChange={(e) => setDirection(e.target.value)}>
        <option value="forward">Forward</option>
        <option value="backward">Backward</option>
      </select>
      <button type="submit">Apply Cipher</button>
      <div>Result: {result}</div>
    </form>
  );
};

export default CaesarCipher;
