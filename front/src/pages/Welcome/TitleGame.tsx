import { Button, Carousel, Col, Input, Row, Typography, Avatar } from "antd";
import * as React from "react";
import { FieldTimeOutlined, ReloadOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import "./Welcome.css";
import { rules } from "../../Instruction";
import { SocketContext } from "../../context/socket";
import { UserAPI } from "../../api/UserAPI";
const { Title } = Typography;

export const TitleGame = () => {
  return (
    <React.Fragment>
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
      <Row justify="center" id="sloganDiv">
        <div id="inventBadAnswerDiv">Inventez une fausse réponse...</div>
        <div id="moreThanRealDiv">plus vraie que la vraie !</div>
      </Row>
    </React.Fragment>
  );
};
