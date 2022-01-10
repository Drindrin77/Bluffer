import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Row, Typography } from "antd";
import * as React from "react";
const { Title } = Typography;

const players = [
  { userName: "Drindrin", image: "https://joeschmoe.io/api/v1/random" },
  { userName: "Nicouli", image: "https://joeschmoe.io/api/v1/random" },
  { userName: "Alexis", image: "https://joeschmoe.io/api/v1/random" },
  { userName: "Dio", image: "https://joeschmoe.io/api/v1/random" },
];
const nbMaxPlayer = 10;

export const Lobby = (props) => {
  const displayEmptyPlayers = () => {
    let emptyPlayer = [];
    for (let i = players.length; i < nbMaxPlayer; i++) {
      emptyPlayer.push(<Player />);
    }
    return emptyPlayer;
  };

  return (
    <div id="welcomePage">
      <Row justify="center">
        <Title
          style={{
            fontSize: 100,
            color: "white",
          }}
        >
          Bluffer
        </Title>
      </Row>
      <Row justify="center">
        <Col span={6} style={{ border: "1px solid black", padding: 10 }}>
          <Row justify="center">
            Joueurs {players.length} / {nbMaxPlayer}
          </Row>
          {players.map((player, index) => {
            return (
              <Row key={index}>
                <Player player={player} />
              </Row>
            );
          })}
          {displayEmptyPlayers()}
        </Col>
        <Col span={6} style={{ border: "1px solid black", marginLeft: 10 }}>
          Param
        </Col>
      </Row>
    </div>
  );
};

const Player = (props) => {
  const { player } = props;
  const name = player ? player.userName : "Vide";
  const borderStyle = player ? "3px solid white" : "3px solid grey";
  const color = player ? "white" : "grey";
  return (
    <div style={{ padding: 10, border: borderStyle, width: "100%", borderRadius: 10, marginTop: 10, color: color }}>
      {player && <Avatar size={64} src={player.image} />}
      {!player && <Avatar size={64} icon={<UserOutlined />} />}
      {name}
    </div>
  );
};
