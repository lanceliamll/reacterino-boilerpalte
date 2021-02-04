import React, { useState, useEffect } from 'react';
import { Home, About } from "./components/index";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { firestore } from "./mutations";
import "./App.scss";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;