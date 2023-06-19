//  Disable a button
// Challenge: Make button disabled when there is no character on the input field. Enable the `Submit` button (remove button from being disabled) when there is at least one character.
import "./App4.css";
import { useState } from "react";

const App4 = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button disabled={value.length < 1}>Submit</button>
    </>
  );
};
export default App4;
