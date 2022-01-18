import { Tooltip } from "antd";
import * as React from "react";
import "./index.css";

interface StartButtonProps {
  isDisabled: boolean;
  handleJoinGame: () => void;
}
export const StartButton = (props: StartButtonProps) => {
  const { isDisabled, handleJoinGame } = props;
  return (
    <div className="container" onClick={handleJoinGame}>
      {isDisabled ? (
        <Tooltip placement="bottom" title="Choisis d'abord un pseudo !">
          <div className="disabled">C'est parti !</div>
        </Tooltip>
      ) : (
        <div className="activated">C'est parti !</div>
      )}
    </div>
  );
};
