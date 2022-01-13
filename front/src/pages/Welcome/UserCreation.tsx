import { ReloadOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Row, Typography } from "antd";
import * as React from "react";
import { UserAPI } from "../../api/UserAPI";
import { SocketContext } from "../../context/socket";
import { rules } from "../../Instruction";
import { BottomDescription } from "./BottomDescription";
import { GameExplaination } from "./GameExplaination";
import { StartButton } from "./StartButton";
import { TitleGame } from "./TitleGame";
import "./Welcome.css";

const { Title } = Typography;

export const UserCreation = (props) => {
  const [userName, setUserName] = React.useState("");
  const socket = React.useContext(SocketContext);

  const createGame = () => {
    if (userName !== "" && socket) {
      UserAPI.createUser(userName, socket.id).then((res) => {
        console.log(res);

        //RoomAPI.createRoom(user.idUser);
      });
    }
  };

  return (
    <Col flex="720px" style={{ backgroundColor: "#690B12", padding: 20, borderRadius: 10 }}>
      <Row justify="center">
        <Title level={4} style={{ color: "white", fontWeight: "bolder" }}>
          Choisis une image et un pseudo !
        </Title>
      </Row>
      <Row>
        <Col id="avatarCol">
          <Avatar size={200} src="https://joeschmoe.io/api/v1/random" />
          <button id="reloadImgButton" role="button">
            <ReloadOutlined style={{ marginRight: 5 }} /> Une autre image !
          </button>
        </Col>
        <Col id="createPartyCol">
          <input
            type="text"
            placeholder="Pseudonyme"
            id="userNameInput"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />

          <StartButton isDisabled={userName === ""} />
          <Button type="primary" disabled={userName === ""} onClick={() => createGame()}>
            Créer une partie
          </Button>
        </Col>
      </Row>
    </Col>
  );
};
