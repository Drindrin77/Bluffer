import { Row, Typography } from "antd";
import * as React from "react";
import { BlufferFooter } from "../../components/Footer";
import { TitleGame } from "../../components/TitleGame";
import "./index.css";
import { Param } from "./Param";
import { PlayerList } from "./PlayerList";
import { useParams } from "react-router-dom";
import { ENDPOINT } from "../../config";

export const Lobby = (props) => {
  let { idRoomSocket } = useParams();

  const invitLink = ENDPOINT + "/lobby/" + idRoomSocket;

  return (
    <div id="wrapper">
      <TitleGame onlyTitle />
      <div id="mainContent">
        <Row justify="center" style={{ height: "100%" }}>
          <PlayerList />
          <Param invitLink={invitLink} />
        </Row>
      </div>
      <div>
        <BlufferFooter />
      </div>
    </div>
  );
};
