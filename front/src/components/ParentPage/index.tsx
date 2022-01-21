import { Row } from "antd";
import * as React from "react";
import "./index.css";

export const ParentPage = (props) => {
  return <div id="welcomePage">{props.children}</div>;
};
