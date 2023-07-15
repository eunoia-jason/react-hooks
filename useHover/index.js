import React from "react";
import ReactDOM from "react-dom";
import { useHover } from "./useHover";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useHover(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
