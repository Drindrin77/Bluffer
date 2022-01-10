import { Button, Carousel, Col, Input, Row, Typography, Avatar } from "antd";
import * as React from "react";
import { FieldTimeOutlined, ReloadOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import "./Welcome.css";
import { rules } from "../../Instruction";
const { Title } = Typography;

export const Welcome = (props) => {
  return (
    <div id="welcomePage">
      <div id="welcomeContent">
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
        <Row justify="center" style={{ marginTop: 100 }}>
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
                <input type="text" placeholder="Pseudonyme" id="userNameInput" />
                <button id="buttonCreateGame" role="button">
                  Créer une partie
                </button>
              </Col>
            </Row>
          </Col>
          <Col id="gameExplainationCol" xl={6}>
            <Row justify="center">
              <Title level={4} style={{ color: "white" }}>
                Déroulement de la partie
              </Title>
            </Row>

            {rules.map((rule, index) => (
              <StepRule number={index + 1} key={index}>
                {rule}
              </StepRule>
            ))}
          </Col>
        </Row>

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

      <div id="footer" style={{}}>
        Ce jeu n'est pas la version officielle du jeu de société Bluffer. Il reprend les mêmes mécanismes mais avec
        quelques modifications. <br /> Nous vous invitons à acheter le jeu de société officiel.
      </div>
    </div>
  );
};

const StepRule = (props) => {
  const { number, children } = props;
  return (
    <div style={{ marginTop: 5 }}>
      <span className="stepRule">{number}</span>
      {children}
    </div>
  );
};
