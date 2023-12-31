import React from "react";
import ReactDOM from "react-dom";
import { useTabs } from "./useTabs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
