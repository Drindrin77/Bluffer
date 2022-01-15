import { CrownFilled, CrownTwoTone, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Row, Tag, Typography } from "antd";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import * as React from "react";
import { BlufferFooter } from "../../components/Footer";
import { TitleGame } from "../../components/TitleGame/TitleGame";
import "./Lobby.css";
const { Title } = Typography;

const players = [
  { userName: "Drindrin", image: "https:joeschmoe.io/api/v1/random", mine: true, admin: true },
  { userName: "Nicouli", image: "https:joeschmoe.io/api/v1/random" },
  { userName: "Nicouli", image: "https:joeschmoe.io/api/v1/random" },
  { userName: "Nicouli", image: "https:joeschmoe.io/api/v1/random" },
  { userName: "Nicouli", image: "https:joeschmoe.io/api/v1/random" },
  { userName: "Alexis", image: "https:joeschmoe.io/api/v1/random" },
  { userName: "Alexis", image: "https:joeschmoe.io/api/v1/random" },
  { userName: "Dio", image: "https:joeschmoe.io/api/v1/random" },
];
const nbMaxPlayer = 10;

export const PlayerList = (props) => {
  const percentageNbPlayer = (players.length * 100) / nbMaxPlayer;
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
            Joueurs {players.length} / {nbMaxPlayer}
          </div>
          <div style={{ flex: 1, overflow: "auto" }} className="sc4">
            {players.map((player, index) => {
              return (
                <div
                  key={index}
                  className="playerContainer"
                  style={{
                    border: player.mine ? "3px solid #d7a5a5" : "3px solid rgba(179, 0, 0, 0.685)",
                  }}
                >
                  <Player player={player} />
                  {player.admin ? (
                    <CrownFilled style={{ color: "yellow", fontSize: 40, marginRight: 20 }} />
                  ) : (
                    <button className="button-74" role="button">
                      Ouste !
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

const Player = (props) => {
  const { player } = props;
  return (
    <div style={{ padding: 10, width: "100%", color: "white", fontSize: 20 }}>
      <Avatar size={64} src={player.image} />
      {player.userName}
    </div>
  );
};
