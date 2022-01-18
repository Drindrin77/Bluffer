import { LinkOutlined } from "@ant-design/icons";
import { Button, Col, InputNumber, Row, Select, Typography } from "antd";
import * as React from "react";

const { Option } = Select;

const nbMaxPlayer = 10;
const selectPlayersNb = [2, 3, 4, 5, 6, 7, 8, 9, 10];

interface ParamProps {
  invitLink: string;
}

export const Param = (props: ParamProps) => {
  const { invitLink } = props;

  const handleInvitLink = () => {
    console.log(invitLink);
  };

  return (
    <React.Fragment>
      <Col span={8} style={{ marginLeft: 10 }}>
        <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: 15 }}>
          <div id="parameterContainer">
            <Row justify="center" id="titleParameters">
              Paramètres de la partie
            </Row>

            <div id="btnLink" onClick={handleInvitLink}>
              <LinkOutlined style={{ marginRight: 20, fontSize: 20 }} />
              Inviter des amis
            </div>

            <div style={{ display: "flex", flexDirection: "column", margin: 20 }}>
              <span style={{ marginTop: 20 }}>Nombre de joueurs max</span>
              <Select
                bordered={false}
                size="large"
                style={{ backgroundColor: "rgb(138 13 22)", marginTop: 10, color: "white" }}
                defaultValue="10"
              >
                {selectPlayersNb.map((nb) => {
                  return (
                    <Option value={nb} key={nb}>
                      {nb}
                    </Option>
                  );
                })}
              </Select>
            </div>

            <div style={{ display: "flex", flexDirection: "column", margin: 20 }}>
              Nombre de points gagnant
              <InputNumber
                min={1}
                max={100}
                size="large"
                defaultValue={12}
                bordered={false}
                style={{ backgroundColor: "rgb(138 13 22)", marginTop: 10, color: "white", width: "100%" }}
              />
            </div>
          </div>

          {/* BUTTON LANCER LA PARTIE */}

          <a href="#" className="animated-button1">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Lancer la partie
          </a>
        </div>
      </Col>
    </React.Fragment>
  );
};
