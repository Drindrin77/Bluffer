import { ReloadOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Row, Typography } from "antd";
import * as React from "react";
import { UserAPI } from "../../api/UserAPI";
import { SocketContext } from "../../context/socket";
import { rules } from "../../Instruction";
import { Footer } from "../Footer";
import { BottomDescription } from "./BottomDescription";
import { GameExplaination } from "./GameExplaination";
import { StartButton } from "./StartButton";
import { TitleGame } from "./TitleGame";
import { UserCreation } from "./UserCreation";
import "./Welcome.css";

export const Welcome = (props) => {
  return (
    <div id="welcomePage">
      <div id="welcomeContent">
        <TitleGame />

        <Row justify="center" style={{ marginTop: 100 }}>
          <UserCreation />
          <GameExplaination />
        </Row>

        <BottomDescription />
      </div>

      <Footer />
    </div>
  );
};
