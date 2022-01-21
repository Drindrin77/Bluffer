import { CrownFilled } from "@ant-design/icons";
import { Avatar, Col } from "antd";
import * as React from "react";
import { User } from "../../types/UserType";

interface PlayerListProps {
  idUser: number;
  idAdmin: number;
  nbPlayerMax: number;
  players: User[];
}

export const PlayerList = (props: PlayerListProps) => {
  const { idAdmin, nbPlayerMax, idUser, players } = props;
  const percentageNbPlayer = (players.length * 100) / nbPlayerMax;
  const isAdmin = idUser == idAdmin;
  const fillPercentage = 100 - percentageNbPlayer;

  return (
    <React.Fragment>
      <Col span={8} id="playersContainer">
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <div
            id="nbPlayer"
            style={{
              background: `linear-gradient(to right, #b3000cb0 ${percentageNbPlayer}%, #44070b ${fillPercentage}%)`,
            }}
          >
            Joueurs {players.length} / {nbPlayerMax}
          </div>
          <div style={{ flex: 1, overflow: "auto" }} className="sc4">
            {players.map((player, index) => {
              return <Player key={index} player={player} isAdmin={isAdmin} idAdmin={idAdmin} idUser={idUser} />;
            })}
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

interface PlayerProps {
  isAdmin: boolean;
  idAdmin: number;
  idUser: number;
  player: User;
}
const Player = (props: PlayerProps) => {
  const { player, isAdmin, idUser, idAdmin } = props;
  return (
    <div className={player.id == idUser ? "playerContainer isCurrentUser" : " playerContainer notCurrentUser"}>
      <div className="avatarUsername">
        <Avatar size={64} src={"https:joeschmoe.io/api/v1/random"} />
        <span>{player.username}</span>
      </div>

      {player.id == idAdmin && <CrownFilled className="crownStyle" />}

      {isAdmin && player.id !== idUser && (
        <button className="button-74" role="button">
          Ouste !
        </button>
      )}
    </div>
  );
};
