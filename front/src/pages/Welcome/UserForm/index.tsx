import { ReloadOutlined } from "@ant-design/icons";
import { Avatar, Col, Row, Typography } from "antd";
import * as React from "react";
import { useHistory } from "react-router-dom";
import { PostGameActions } from "../../../redux-saga/actions/PostGameActions";
import { SocketContext } from "../../../context/socket";
import { StartButton } from "../../../components/StyledButton.tsx";
const { Title } = Typography;

export const UserCreation = (props) => {
  const [userName, setUserName] = React.useState("");
  const socket = React.useContext(SocketContext);
  const history = useHistory();

  async function handleJoinGame() {
    if (userName !== "") {
      try {
        const idRoomSocket = await PostGameActions.createGame(userName, socket.id);
        history.push("/lobby/" + idRoomSocket);
      } catch {
        console.error("error creation user");
      }
    }
  }

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

          <StartButton isDisabled={userName === ""} handleJoinGame={() => handleJoinGame()} />
        </Col>
      </Row>
    </Col>
  );
};
