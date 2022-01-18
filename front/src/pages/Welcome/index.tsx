import { Row } from "antd";
import * as React from "react";
import { BlufferFooter } from "../../components/Footer";
import { TitleGame } from "../../components/TitleGame";
import { BottomDescription } from "./BottomDescription";
import { GameExplaination } from "./GameExplaination";
import { UserCreation } from "./UserForm";
import "./index.css";

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

      <BlufferFooter />
    </div>
  );
};
