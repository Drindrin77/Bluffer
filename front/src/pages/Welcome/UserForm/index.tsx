import { ReloadOutlined } from "@ant-design/icons";
import { Avatar, Col, Row, Typography } from "antd";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledButton } from "../../../components/StyledButton.tsx";
import { createUserRequest } from "../../../redux-saga/actions/UsersActions";
import { RootState } from "../../../redux-saga/reducers";
import { SocketContext } from "../../../socket";
const { Title } = Typography;

export const UserCreation = (props) => {
  const [userName, setUserName] = React.useState("");
  const dispatch = useDispatch();
  const { pending, user, error } = useSelector((state: RootState) => state.currentUser);
  const socket = React.useContext(SocketContext);

  function handleJoinGame() {
    if (userName !== "") {
      dispatch(createUserRequest(userName, socket.id));
    }
  }

  React.useEffect(() => {
    if (user?.id) {
      console.log("dinbish");
    }
  }, [user]);

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

          <StyledButton isDisabled={userName === ""} handleJoinGame={() => handleJoinGame()} />
        </Col>
      </Row>
    </Col>
  );
};
