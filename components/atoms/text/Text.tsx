// design pattern used: Fascade design Pattern

import React from "react";
import { TextProps } from "./types";

function Text(props: TextProps) {
  const { children } = props;

  return <p className="m-0">{children}</p>;
}

export default Text;
