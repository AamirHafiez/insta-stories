"use client";

import { Story } from "@/components";
import useHomeController from "./view-model/useHome.viewModel";
import { useCallback } from "react";

export default function Home() {
  const { data: storyData, isLoading } = useHomeController();

  return (
    <div>
      {/* <Story>{isLoading ? renderStoriesLoading() : renderStories()}</Story> */}
      <Story data={storyData} isLoading={isLoading} />
    </div>
  );
}
