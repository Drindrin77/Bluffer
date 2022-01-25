import { CrownFilled } from "@ant-design/icons";
import { Avatar, Col } from "antd";
import * as React from "react";
import { RoomAPI } from "../../api/RoomAPI";
import { Room } from "../../types/RoomType";
import { User } from "../../types/UserType";

interface PlayerListProps {
  idUser: number;
  room: Room;
}

export const PlayerList = (props: PlayerListProps) => {
  const { idUser, room } = props;
  const percentageNbPlayer = (room.users.length * 100) / room.nbPlayerMax;
  const isAdmin = idUser == room.idAdmin;

  return (
    <React.Fragment>
      <Col span={8} id="playersContainer">
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <div className="progressContainer">
            <span className="nbPlayers">
              Joueurs <b style={{ fontSize: 30 }}>{room.users.length}</b>
              <span style={{ fontSize: 20, color: "grey" }}>/{room.nbPlayerMax}</span>
            </span>
            <div className="progressBar" style={{ width: `${percentageNbPlayer}%` }}></div>
          </div>

          <div style={{ flex: 1, overflow: "auto" }} className="sc4">
            {room.users.map((player, index) => {
              return <Player key={index} player={player} isAdmin={isAdmin} room={room} idUser={idUser} />;
            })}
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

interface PlayerProps {
  isAdmin: boolean;
  room: Room;
  idUser: number;
  player: User;
}
const Player = (props: PlayerProps) => {
  const { player, isAdmin, idUser, room } = props;

  const onKickPlayer = () => {
    RoomAPI.kickPlayer(room.id, player.id)
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  return (
    <div className={player.id == idUser ? "playerContainer isCurrentUser" : " playerContainer notCurrentUser"}>
      <div className="avatarUsername">
        <Avatar size={64} src={"https:joeschmoe.io/api/v1/random"} />
        <span>{player.username}</span>
      </div>

      {player.id == room.idAdmin && <CrownFilled className="crownStyle" />}

      {isAdmin && player.id !== idUser && (
        <button className="button-74" role="button" onClick={() => onKickPlayer()}>
          Ouste !
        </button>
      )}
    </div>
  );
};
