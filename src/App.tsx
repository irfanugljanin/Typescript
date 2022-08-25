import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SimpleComponent from "./Components/SimpleComponent";

function App() {
  return (
    <div className="App">
      <SimpleComponent name="suad" age={10}>
        <p></p>
      </SimpleComponent>
    </div>
  );
}

export default App;
