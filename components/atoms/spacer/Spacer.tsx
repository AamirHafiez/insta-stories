import React from "react";
import { SpacerProps } from "./types";
import { SpacerType } from "./config";

function Spacer(props: SpacerProps) {
  const { type = SpacerType.SM } = props;

  return <div style={{ height: type, aspectRatio: 1 }} />;
}

export default Spacer;
