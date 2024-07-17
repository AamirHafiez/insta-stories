import React from "react";
import { IconButtonProps } from "./types";
import Pressable from "@/components/atoms/pressable/Pressable";

function IconButton(props: IconButtonProps) {
  const { children } = props;

  return (
    <Pressable className="rounded-full overflow-hidden" {...props}>
      {children}
    </Pressable>
  );
}

export default IconButton;
