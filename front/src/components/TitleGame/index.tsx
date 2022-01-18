import { Button, Carousel, Col, Input, Row, Typography, Avatar } from "antd";
import * as React from "react";
import "./index.css";
const { Title } = Typography;

interface TitleGameProps {
  onlyTitle?: boolean;
}
export const TitleGame = (props: TitleGameProps) => {
  const { onlyTitle } = props;
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
      {!onlyTitle && (
        <Row justify="center" id="sloganDiv">
          <div id="inventBadAnswerDiv">Inventez une fausse réponse...</div>
          <div id="moreThanRealDiv">plus vraie que la vraie !</div>
        </Row>
      )}
    </React.Fragment>
  );
};
