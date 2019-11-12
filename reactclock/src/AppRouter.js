import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Alarm from "./components/Alarm";
import Clock from "./components/Clock";
import Timer from "./components/Timer";
import Home from "./components/Home";

export default function AppRouter() {
  return (
    <Router>
      <ul className='menu'>
        <li className='menu-item'>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/clock'>Clock</Link>
        </li>
        <li>
          <Link to='/alarm'>Alarm</Link>
        </li>
        <li>
          <Link to='/timer'>Timer</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/clock'>
          <Clock />
        </Route>
        <Route exact path='/alarm'>
          <Alarm />
        </Route>
        <Route exact path='/timer'>
          <Timer />
        </Route>
      </Switch>
    </Router>
  );
}
