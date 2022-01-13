import * as React from "react";
import "./StartButton.css";

interface StartButtonProps {
  isDisabled: boolean;
  onClick: () => void;
}
export const StartButton = (props) => {
  const { isDisabled, onClick } = props;
  return (
    <div className="container">
      <div className={isDisabled ? "disabled" : "activated"}>C'est parti !</div>
    </div>
  );
};
