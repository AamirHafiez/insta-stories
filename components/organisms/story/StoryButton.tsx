import React, { useContext, useRef } from "react";
import { StoryButtonProps } from "./types";
import IconButton from "@/components/molecules/icon-button/IconButton";
import Image from "@/components/atoms/image/Image";
import { StoryButtonSize } from "./config";
import { withResizePress } from "@/hoc/animations";
import { StoryContext } from "./Story";
import { motion } from "framer-motion";

const AnimatedIconButton = withResizePress(IconButton);

function StoryButton(props: StoryButtonProps) {
  const {
    size = StoryButtonSize.MD,
    isLoading = false,
    data,
    isSeen = false,
    id,
  } = props;

  const { openStoryView } = useContext(StoryContext);

  const iconButtonRef = useRef<HTMLDivElement | null>(null);

  if (isLoading) {
    return (
      <div
        className="animate-pulse bg-slate-900 rounded-full"
        style={{
          height: size,
          aspectRatio: 1,
        }}
      />
    );
  }

  if (data?.img == null) return null;
  return (
    <AnimatedIconButton onClick={() => openStoryView(id)}>
      <motion.div
        layoutId={data.img}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={iconButtonRef}
        style={{
          height: size,
          aspectRatio: 1,
        }}
        className={`rounded-full bg-gradient-to-r ${
          isSeen ? "bg-slate-500" : "from-pink-500 via-red-500 to-yellow-500"
        }  p-1`}
      >
        <Image
          src={data.img}
          alt="story"
          width={size}
          height={size}
          priority={false}
          className="rounded-full border-black border-4 shadow-inner pointer-events-none"
        />
      </motion.div>
    </AnimatedIconButton>
  );
}

export default StoryButton;
