import * as React from "react";

export const Footer = (props) => {
  return (
    <div
      id="footer"
      style={{
        flexShrink: 0,
        backgroundColor: "#690b12",
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 10,
        textAlign: "center",
        color: "lightgrey",
      }}
    >
      Ce jeu n'est pas la version officielle du jeu de société Bluffer. Il reprend les mêmes mécanismes mais avec
      quelques modifications. <br /> Nous vous invitons à acheter le jeu de société officiel.
    </div>
  );
};
