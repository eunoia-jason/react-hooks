import React from "react";
import ReactDOM from "react-dom";
import { useScroll } from "./useScroll";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

const App = () => {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Hello
      </h1>
    </div>
  );
};

export default App;
