import { Row, Typography } from "antd";
import * as React from "react";
import { BlufferFooter } from "../../components/Footer";
import { TitleGame } from "../../components/TitleGame/TitleGame";
import "./Lobby.css";
import { Param } from "./Param";
import { PlayerList } from "./PlayerList";
const { Title } = Typography;

export const Lobby = (props) => {
  return (
    <div id="wrapper">
      <TitleGame onlyTitle />
      <div id="mainContent">
        <Row justify="center" style={{ height: "100%" }}>
          <PlayerList />
          <Param />
        </Row>
      </div>
      <div>
        <BlufferFooter />
      </div>
    </div>
  );
};
