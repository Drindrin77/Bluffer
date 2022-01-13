import * as React from "react";
import { Welcome } from "./pages/Welcome/Welcome";
import "antd/dist/antd.css";
import { Switch, Route, Link } from "react-router-dom";
import { Lobby } from "./pages/Lobby/Lobby";
import { socket, SocketContext } from "./context/socket";

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Switch>
        <Route path="/lobby">
          <Lobby />
        </Route>
        <Route exact path="/">
          <Welcome />
        </Route>
      </Switch>
    </SocketContext.Provider>
  );
}

export default App;
