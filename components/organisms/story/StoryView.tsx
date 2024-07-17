import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StoryViewProps } from "./types";
import IconButton from "@/components/molecules/icon-button/IconButton";
import Image from "@/components/atoms/image/Image";
import StoryImage from "./StoryImage";
import useStoryViewController from "./hooks/controller/useStoryViewController";
import ProgressBar from "@/components/molecules/progress-bar/ProgressBar";
import { STORY_PROGRESS_CONFIG } from "./config";

function StoryView(props: StoryViewProps) {
  const { isOpen, data, layoutId } = props;

  const overrideOpen = isOpen && data != null;

  const {
    currentIndex,
    handleClickNextIndex,
    handleClickPrevIndex,
    onCloseStoryView,
    totalProgresses,
  } = useStoryViewController(props);

  return (
    <AnimatePresence>
      {overrideOpen && (
        <motion.div
          layoutId={layoutId}
          className="w-screen h-screen fixed top-0"
        >
          <div className="h-full w-full flex justify-center  relative">
            <div className="h-full w-full absolute top-0 bg-black z-10" />
            <div
              className="w-full h-5/6 z-20 relative max-w-md shadow-inner"
              style={{ maxHeight: "80%", alignSelf: "center" }}
            >
              <div className="absolute top-2 z-30 w-full">
                <ProgressBar
                  duration={STORY_PROGRESS_CONFIG.durationInSeconds}
                  height={STORY_PROGRESS_CONFIG.progressHeight}
                  className="px-2"
                  totalProgresses={totalProgresses}
                  currentProgress={currentIndex}
                  onProgressComplete={handleClickNextIndex}
                />
                <div className="flex justify-end">
                  <IconButton onClick={onCloseStoryView}>
                    <Image
                      src={"/svg/cross.svg"}
                      alt="close"
                      height={40}
                      width={40}
                    />
                  </IconButton>
                </div>
              </div>
              <StoryImage data={data[currentIndex]} />
              <div className="absolute w-full h-full z-20 flex top-0">
                <div onClick={handleClickPrevIndex} className="w-1/2 h-full" />
                <div onClick={handleClickNextIndex} className="w-1/2 h-full" />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default StoryView;
