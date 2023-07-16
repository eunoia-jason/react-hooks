import React from "react";
import ReactDOM from "react-dom";
import { useFadeIn } from "./useFadeIn";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>Hello My name is Jason</p>
    </div>
  );
};

export default App;
