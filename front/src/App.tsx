import "antd/dist/antd.css";
import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { socket, SocketContext } from "./socket";
import { Lobby } from "./pages/Lobby";
import { Welcome } from "./pages/Welcome";
import store from "./redux-saga/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <SocketContext.Provider value={socket}>
        <Switch>
          <Route path="/lobby">
            <Lobby />
          </Route>
          <Route path={["/join/:id", "/"]}>
            <Welcome />
          </Route>
        </Switch>
      </SocketContext.Provider>
    </Provider>
  );
}

export default App;
