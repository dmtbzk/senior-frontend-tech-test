import React, { useState } from "react";
import { handleCipher } from './cipherFunctions';

const CaesarCipher: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [shift, setShift] = useState<number>(1);
  const [result, setResult] = useState<string>("");
  const [direction, setDirection] = useState<string>("forward");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const output = handleCipher(text, shift, direction);
    setResult(output);
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
