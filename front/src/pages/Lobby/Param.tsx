import { LinkOutlined } from "@ant-design/icons";
import { Button, Col, InputNumber, Popover, Row, Select, Tooltip, Typography } from "antd";
import * as React from "react";
import { useDispatch } from "react-redux";
import { updateRoomParamRequest } from "../../redux-saga/actions/RoomsActions";
import { invitLink, Room } from "../../types/RoomType";

const { Option } = Select;

const selectPlayersNb = [2, 3, 4, 5, 6, 7, 8, 9, 10];

interface ParamProps {
  isAdmin: boolean;
  nbPlayer: number;
  room: Room;
}

export const Param = (props: ParamProps) => {
  const { nbPlayer, isAdmin, room } = props;
  const dispatch = useDispatch();

  const handleInvitLink = () => {
    navigator.clipboard.writeText(invitLink(room.idRoomSocket));
  };

  const handleChangeParam = (param) => {
    dispatch(updateRoomParamRequest({ idRoom: room.id, param }));
  };

  const handleLauncherGame = () => {};

  return (
    <React.Fragment>
      <Col span={8} style={{ marginLeft: 10 }}>
        <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: 15 }}>
          <div id="parameterContainer">
            <Row justify="center" id="titleParameters">
              Paramètres de la partie
            </Row>

            <Tooltip trigger="click" title={<div>C'est copié !</div>} color="green" mouseLeaveDelay={0.1}>
              <div id="btnLink" onClick={handleInvitLink}>
                <LinkOutlined style={{ marginRight: 20, fontSize: 20 }} />
                Inviter des amis
              </div>
            </Tooltip>
            <div style={{ display: "flex", flexDirection: "column", margin: 20 }}>
              <span style={{ marginTop: 20 }}>Nombre de joueurs max</span>
              <Select
                bordered={false}
                size="large"
                disabled={!isAdmin}
                style={{ backgroundColor: "rgb(255 255 255 / 16%)", marginTop: 10, color: "white" }}
                onChange={(value) => {
                  handleChangeParam({ nbPlayerMax: value });
                }}
                value={room.nbPlayerMax}
              >
                {selectPlayersNb.map((nb) => {
                  return (
                    <Option disabled={nb < nbPlayer} value={nb} key={nb}>
                      {nb}
                    </Option>
                  );
                })}
              </Select>
            </div>

            <div style={{ display: "flex", flexDirection: "column", margin: 20 }}>
              Nombre de points gagnant
              <InputNumber
                min={12}
                disabled={!isAdmin}
                max={20}
                onChange={(value) => {
                  handleChangeParam({ maxScore: value });
                }}
                size="large"
                value={room.maxScore}
                bordered={false}
                style={{ backgroundColor: "rgb(255 255 255 / 16%)", marginTop: 10, color: "white", width: "100%" }}
              />
            </div>
          </div>

          {/* BUTTON LANCER LA PARTIE */}

          <div className="animated-button1">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {isAdmin ? "Lancer la partie" : "En attente du hôte de la partie"}
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};
