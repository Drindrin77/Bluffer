import { Row, Typography } from "antd";
import * as React from "react";
import { BlufferFooter } from "../../components/Footer";
import { TitleGame } from "../../components/TitleGame";
import "./index.css";
import { Param } from "./Param";
import { PlayerList } from "./PlayerList";
import { useParams } from "react-router-dom";
import { ENDPOINT } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux-saga/reducers";
import { invitLink } from "../../types/RoomType";
import { useHistory } from "react-router-dom";
import { getRoomRequest } from "../../redux-saga/actions/RoomsActions";
import rooms from "../../redux-saga/reducers/rooms";

export const Lobby = (props) => {
  const { user } = useSelector((state: RootState) => state.currentUser);
  const { pending, room, error } = useSelector((state: RootState) => state.room);
  const isAdmin = room && user && room.idAdmin == user.id;
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (room) {
      dispatch(getRoomRequest({ idRoom: room.id }));
    }
  }, []);

  return room && user ? (
    <div id="wrapper">
      <TitleGame onlyTitle />
      <div id="mainContent">
        <Row justify="center" style={{ height: "100%" }}>
          <PlayerList players={room.users} idAdmin={room.idAdmin} nbPlayerMax={room.nbPlayerMax} idUser={user.id} />
          <Param nbPlayer={room.users.length} room={room} isAdmin={isAdmin} />
        </Row>
      </div>
      <div>
        <BlufferFooter />
      </div>
    </div>
  ) : (
    <>pas bein</>
  );
};
