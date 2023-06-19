// Challenge: User should be able to type
// in any characters on input and those
//  character should show in the browser.
import { useState } from "react";
import "./App3.css";

const App3 = () => {
  const [text, setText] = useState("");
  return (
    <>
      <h4>Data Binding Exercise</h4>
      <input
        type="text"
        placeholder="Enter Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
    </>
  );
};
export default App3;
