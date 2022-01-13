import * as React from "react";
import "./StartButton.css";

interface StartButtonProps {
  isDisabled: boolean;
  onClick: () => void;
}
export const StartButton = (props: StartButtonProps) => {
  const { isDisabled, onClick } = props;
  return (
    <div className="wrapper">
      <a href="#" id="buttonCreateGame">
        <span>Hover Me!</span>
      </a>
    </div>

    // <div className="center">
    //   <button className="btn" disabled={isDisabled} onClick={onClick}>
    //     <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
    //       <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
    //       <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
    //     </svg>
    //     <span> Créer une partie</span>
    //   </button>
    // </div>
  );
};
