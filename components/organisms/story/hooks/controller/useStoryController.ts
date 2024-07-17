// By Separation of concerns principle abstracting out UI logic from UI rendering

import { useCallback, useEffect, useState } from "react";
import { StoryButtonIdType, StoryProps } from "../../types";
import { StoryElement } from "@/data/stories/datasource/stories.model";

function useStoryController(props: StoryProps) {
  const { data, isLoading } = props;

  const [mutableStoriesData, setMutableStoriesData] = useState(data);

  const [showStoryView, setShowStoryView] = useState(false);

  const [currentStoryIndex, setCurrentStoryIndex] = useState<number | null>(
    null
  );

  const maxDataLength = data?.length ?? 0;

  useEffect(() => {
    if (data != null) {
      if (data?.length <= 1) {
        makeCurrentStoryMarkedAsSeen();
      }
      setMutableStoriesData(data);
    }
  }, [data]);

  const openStoryView = (id: StoryButtonIdType) => {
    setShowStoryView(true);
    setCurrentStoryIndex(id as number);
  };

  const closeStoryView = (markAsSeen = false) => {
    if (markAsSeen) {
      makeCurrentStoryMarkedAsSeen();
    }
    setShowStoryView(false);
  };

  const getCurrentStoriesForView = useCallback(() => {
    try {
      return {
        stories: mutableStoriesData?.[currentStoryIndex!]?.stories,
        layoutId: mutableStoriesData?.[currentStoryIndex!].img,
      };
    } catch (error) {
      return null;
    }
  }, [mutableStoriesData, currentStoryIndex]);

  const getCurrentStory = () => {
    return { ...mutableStoriesData?.[currentStoryIndex!] };
  };

  const setCurrentStory = (storyOverride: StoryElement) => {
    try {
      const allStories = [...mutableStoriesData!];
      allStories[currentStoryIndex!] = { ...storyOverride };
      setMutableStoriesData([...allStories]);
    } catch (error) {
      console.error("unable to set current story:", error);
    }
  };

  const makeCurrentStoryMarkedAsSeen = () => {
    const currentStory = getCurrentStory();
    currentStory.watched = true;
    setCurrentStory(currentStory as StoryElement);
  };

  const onNextStory = () => {
    makeCurrentStoryMarkedAsSeen();
    if (currentStoryIndex == null || currentStoryIndex >= maxDataLength - 1) {
      closeStoryView();
      return;
    }
    setCurrentStoryIndex((prev) => prev! + 1);
  };

  const onPreviousStory = () => {
    if (currentStoryIndex == null || currentStoryIndex <= 0) return;
    setCurrentStoryIndex((prev) => prev! - 1);
  };

  return {
    showStoryView,
    openStoryView,
    closeStoryView,
    mutableStoriesData,
    isLoading,
    currentStoriesForView: getCurrentStoriesForView(),
    onNextStory,
    onPreviousStory,
  };
}

export default useStoryController;
