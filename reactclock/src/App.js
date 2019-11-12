import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";

import Alarm from "./components/Alarm";
import Clock from "./components/Clock";
import Timer from "./components/Timer";
import Home from "./components/Home";

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <h1>My Clocks Using React</h1>
        <div>
          <AppRouter />
        </div>
      </div>
    </div>
  );
}

export default App;
