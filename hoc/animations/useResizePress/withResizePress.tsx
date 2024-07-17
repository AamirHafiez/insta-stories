// Implemented HOC Design Pattern to reuse this animation

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useResizePressOptions } from "./types";

export const withResizePress = <PropsType,>(
  Component: (props: PropsType) => JSX.Element | null,
  options?: useResizePressOptions
) => {
  const { resizeScale = 0.9 } = options || {};

  return (props: PropsType & JSX.IntrinsicAttributes) => {
    return (
      <motion.div whileTap={{ scale: resizeScale }}>
        <Component {...props} />
      </motion.div>
    );
  };
};

export default withResizePress;
