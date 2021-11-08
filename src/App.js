import "./App.css";

import { useState } from "react";

export const replaceCamelwithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
};

function App() {
  const [color, setColor] = useState("MediumVioletRed");
  const [buttonState, setButtonState] = useState(false);
  const colorButton =
    color === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  return (
    <div>
      <button
        style={{
          backgroundColor: buttonState ? "gray" : color,
        }}
        onClick={() => {
          setColor(colorButton);
        }}
        disabled={buttonState}
      >
        Change to {replaceCamelwithSpaces(colorButton)}
      </button>
      <input
        id="1"
        type="checkBox"
        onClick={() => setButtonState(!buttonState)}
      ></input>
      <label htmlFor="1">Disable Button</label>
    </div>
  );
}

export default App;
