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
import { getRoomRequest, updateRoom } from "../../redux-saga/actions/RoomsActions";
import rooms from "../../redux-saga/reducers/rooms";
import { socket } from "../../socket";
import { ParentPage } from "../../components/ParentPage";

export const Lobby = (props) => {
  const { user } = useSelector((state: RootState) => state.currentUser);
  const { pending, room, error } = useSelector((state: RootState) => state.room);
  const isAdmin = room && user && room.idAdmin == user.id;
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (socket) {
      socket.on("userJoinedRoom", (data) => {
        dispatch(getRoomRequest({ idRoom: room.id }));
      });
      socket.on("updateRoomConfig", (data) => {
        //Avoid second call
        if (!isAdmin) {
          dispatch(getRoomRequest({ idRoom: room.id }));
        }
      });
      socket.on("userLeftRoom", (data) => {
        dispatch(getRoomRequest({ idRoom: room.id }));
      });
      socket.on("getKicked", (data) => {
        //redirect to welcome with props
      });
    }
  }, [socket]);

  React.useEffect(() => {
    if (room) {
      dispatch(getRoomRequest({ idRoom: room.id }));
    }
  }, []);

  return room && user ? (
    <ParentPage>
      <TitleGame onlyTitle />
      <div id="mainContent">
        <Row justify="center" style={{ height: "100%" }}>
          <PlayerList room={room} idUser={user.id} />
          <Param nbPlayer={room.users.length} room={room} isAdmin={isAdmin} />
        </Row>
      </div>
      <div>
        <BlufferFooter />
      </div>
    </ParentPage>
  ) : (
    <>pas bein</>
  );
};
