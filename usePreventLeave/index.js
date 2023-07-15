import React from "react";
import ReactDOM from "react-dom";
import { usePreventLeave } from "./usePreventLeave";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};

export default App;
