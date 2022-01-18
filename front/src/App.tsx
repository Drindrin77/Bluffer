import * as React from "react";
import { Welcome } from "./pages/Welcome";
import "antd/dist/antd.css";
import { Switch, Route, Link } from "react-router-dom";
import { Lobby } from "./pages/Lobby";
import { socket, SocketContext } from "./context/socket";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//   reducer,
//   applyMiddleware(sagaMiddleware)
// )

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Switch>
        <Route path="/lobby/:idRoomSocket">
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
