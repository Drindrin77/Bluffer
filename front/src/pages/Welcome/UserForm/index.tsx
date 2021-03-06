import { ReloadOutlined } from "@ant-design/icons";
import { Avatar, Col, Row, Typography } from "antd";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledButton } from "../../../components/StyledButton.tsx";
import { createRoomRequest, joinRoomRequest } from "../../../redux-saga/actions/RoomsActions";
import { createUserRequest } from "../../../redux-saga/actions/UsersActions";
import { RootState } from "../../../redux-saga/reducers";
import { SocketContext } from "../../../socket";
import { useHistory } from "react-router-dom";

const { Title } = Typography;

interface UserCreationProps {
  idRoomSocket: string;
}
export const UserCreation = (props: UserCreationProps) => {
  const { idRoomSocket } = props;
  const [userName, setUserName] = React.useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.currentUser);
  const { pending, room, error } = useSelector((state: RootState) => state.room);
  const history = useHistory();

  const socket = React.useContext(SocketContext);

  function handleJoinGame() {
    dispatch(createUserRequest(userName, socket.id));
  }

  React.useEffect(() => {
    if (room) {
      console.log("roo");
      history.push("/lobby/");
    }
  }, [room]);

  React.useEffect(() => {
    if (user) {
      idRoomSocket ? dispatch(joinRoomRequest(idRoomSocket)) : dispatch(createRoomRequest());
    }
  }, [user]);

  return (
    <Col flex="720px" id="userCreationCol">
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
