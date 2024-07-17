"use client";

import { Story } from "@/components";
import useHomeController from "./view-model/useHome.viewModel";

export default function Home() {
  const { data: storyData, isLoading } = useHomeController();

  console.log("process.env", process.env);

  return (
    <div>
      <Story data={storyData} isLoading={isLoading} />
    </div>
  );
}
