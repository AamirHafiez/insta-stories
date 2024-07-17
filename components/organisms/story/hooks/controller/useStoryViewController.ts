import { useContext, useEffect, useState } from "react";
import { StoryViewProps } from "../../types";
import { StoryContext } from "../../Story";
import { STORY_PROGRESS_CONFIG } from "../../config";

var toIdForStory: NodeJS.Timeout;

function useStoryViewController(props: StoryViewProps) {
  const { data, isOpen } = props;

  const { closeStoryView, onNextStory, onPreviousStory } =
    useContext(StoryContext);

  const [currentIndex, setCurrentIndex] = useState(0);

  const maxDataLength = data?.length ?? 0;

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      resetTimeout();
    } else {
      clearTimer();
    }
  }, [isOpen, currentIndex, data?.[0]]);

  const startTimer = () => {
    toIdForStory = setTimeout(() => {
      handleClickNextIndex();
    }, STORY_PROGRESS_CONFIG.durationInSeconds * 1000);
  };

  const clearTimer = () => {
    if (toIdForStory != null) {
      clearTimeout(toIdForStory);
    }
  };

  const resetTimeout = () => {
    clearTimer();
    startTimer();
  };

  const handleClickNextIndex = () => {
    if (currentIndex >= maxDataLength - 1) {
      setCurrentIndex(0);
      onNextStory();
      return;
    }
    setCurrentIndex((prev) => prev + 1);
  };

  const handleClickPrevIndex = () => {
    if (currentIndex <= 0) {
      onPreviousStory();
      return;
    }
    setCurrentIndex((prev) => prev - 1);
  };

  const getAllSeen = () => {
    return currentIndex >= maxDataLength - 1;
  };

  const onCloseStoryView = () => {
    setCurrentIndex(0);
    closeStoryView(getAllSeen());
  };

  return {
    currentIndex,
    handleClickNextIndex,
    handleClickPrevIndex,
    onCloseStoryView,
    totalProgresses: maxDataLength,
  };
}

export default useStoryViewController;
