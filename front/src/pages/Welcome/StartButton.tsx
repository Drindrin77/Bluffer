import { Tooltip } from "antd";
import * as React from "react";
import "./StartButton.css";

interface StartButtonProps {
  isDisabled: boolean;
  onClick: () => void;
}
export const StartButton = (props: StartButtonProps) => {
  const { isDisabled, onClick } = props;
  return (
    <div className="container" onClick={onClick}>
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
