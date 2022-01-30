import { Row } from "antd";
import * as React from "react";
import { BlufferFooter } from "../../components/Footer";
import { TitleGame } from "../../components/TitleGame";
import { BottomDescription } from "./BottomDescription";
import { GameExplaination } from "./GameExplaination";
import { UserCreation } from "./UserForm";
import "./index.css";
import { useParams } from "react-router-dom";
import { ParentPage } from "../../components/ParentPage";

export const Welcome = (props) => {
  const { id } = useParams();
  console.log(props);

  return (
    <ParentPage>
      <div id="welcomeContent">
        <TitleGame />

        <Row justify="center" style={{ marginTop: 100 }}>
          <UserCreation idRoomSocket={id} />
          <GameExplaination />
        </Row>

        <BottomDescription />
      </div>

      <BlufferFooter />
    </ParentPage>
  );
};
