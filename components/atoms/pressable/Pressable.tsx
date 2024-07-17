import React, { useState } from "react";
import { PressableProps } from "./types";

function Pressable(props: PressableProps) {
  const { children, className, onClick = () => {} } = props;

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer inline-block ${className}`}
    >
      {children}
    </div>
  );
}

export default Pressable;
