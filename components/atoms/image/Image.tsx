// design pattern used: Fascade design Pattern

import React from "react";
import { ImageProps } from "./types";
import NextImage from "next/image";

function Image(props: ImageProps) {
  return <NextImage {...props} />;
}

export default Image;
