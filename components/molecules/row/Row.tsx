import React from "react";
import { RowProps } from "./types";

function Row(props: RowProps) {
  const { className = "", children = null } = props;

  return <div className={`flex ${className}`}>{children}</div>;
}

export default Row;
