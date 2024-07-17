import useStoriesRepository from "@/data/stories/repository/useStories.repository";

function useHomeViewModel() {
  const { data, isLoading } = useStoriesRepository();

  return { data, isLoading };
}

export default useHomeViewModel;
