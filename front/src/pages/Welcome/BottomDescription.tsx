import { Button, Carousel, Col, Input, Row, Typography, Avatar } from "antd";
import * as React from "react";
import { FieldTimeOutlined, ReloadOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import "./Welcome.css";
export const BottomDescription = (props) => {
  return (
    <div>
      <Row justify="center">
        <p style={{ color: "white", textAlign: "center", marginTop: 20 }}>
          Pas besoin de connaissance, un peu d'imagination suffit. Les questions sont originales et les réponses
          incroyables. <br />
          Alors n'hésitez pas ! Même vos réponses les plus délirantes seront crédibles et blufferont vos amis
        </p>
      </Row>

      <Row justify="center">
        <div style={{ backgroundColor: "#0A0A0A", borderRadius: 10, padding: 5, fontSize: 20 }}>10 ans +</div>
        <div style={{ backgroundColor: "#0A0A0A", borderRadius: 10, padding: 5, fontSize: 20, marginLeft: 10 }}>
          <TeamOutlined /> 2 à 10 joueurs
        </div>
        <div style={{ backgroundColor: "#0A0A0A", borderRadius: 10, padding: 5, fontSize: 20, marginLeft: 10 }}>
          <FieldTimeOutlined /> 30 mins
        </div>
      </Row>
    </div>
  );
};
