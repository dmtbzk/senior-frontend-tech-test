import React from "react";
import CaesarCipher from "./CaesarCipher";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Caesar Cipher Encoder</h1>
        <CaesarCipher />
      </header>
    </div>
  );
};

export default App;
