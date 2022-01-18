import { Col, Row, Typography } from "antd";
import * as React from "react";
import { rules } from "../../Instruction";
import "./index.css";

const { Title } = Typography;

export const GameExplaination = (props) => {
  return (
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
