import "./App2.css";
import { useState } from "react";

const App2 = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Element Below
      </button>

      {show && <div>Toggle Challenge</div>}
    </>
  );
};
export default App2;
