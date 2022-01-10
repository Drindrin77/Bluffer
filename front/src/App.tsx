import * as React from "react";
import { Welcome } from "./pages/Welcome/Welcome";
import "antd/dist/antd.css";
import { Switch, Route, Link } from "react-router-dom";
import { Lobby } from "./pages/Lobby/Lobby";

function App() {
  return (
    <Switch>
      <Route path="/lobby">
        <Lobby />
      </Route>
      <Route exact path="/">
        <Welcome />
      </Route>
    </Switch>
  );
}

export default App;
