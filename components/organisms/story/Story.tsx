import React, { createContext, useCallback } from "react";
import StoryButton from "./StoryButton";
import StoryRow from "./StoryRow";
import { StoryButtonIdType, StoryProps } from "./types";
import StoryView from "./StoryView";
import useStoryController from "./hooks/controller/useStoryController";

export const StoryContext = createContext({
  openStoryView: (_id: StoryButtonIdType) => {},
  closeStoryView: (_markAsSeen?: boolean) => {},
  onNextStory: () => {},
  onPreviousStory: () => {},
});

function Story(props: StoryProps) {
  const {
    showStoryView,
    closeStoryView,
    openStoryView,
    isLoading,
    mutableStoriesData,
    currentStoriesForView,
    onNextStory,
    onPreviousStory,
  } = useStoryController(props);

  const renderStoriesLoading = useCallback(() => {
    return (
      <StoryRow>
        {["1", "2", "3", "4"].map((item) => (
          <StoryButton key={item} isLoading id={item} />
        ))}
      </StoryRow>
    );
  }, [isLoading]);

  const renderStories = useCallback(() => {
    if (mutableStoriesData == null) return null;
    return (
      <StoryRow>
        {mutableStoriesData!.map((item, index) => {
          return (
            <StoryButton
              key={item.img}
              data={item}
              isSeen={item.watched}
              id={index}
            />
          );
        })}
      </StoryRow>
    );
  }, [mutableStoriesData]);

  return (
    <StoryContext.Provider
      value={{ openStoryView, closeStoryView, onNextStory, onPreviousStory }}
    >
      {isLoading ? renderStoriesLoading() : renderStories()}
      <StoryView
        isOpen={showStoryView}
        data={currentStoriesForView?.stories}
        layoutId={currentStoriesForView?.layoutId}
      />
    </StoryContext.Provider>
  );
}

export default Story;
