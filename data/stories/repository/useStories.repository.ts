import { useAppQuery } from "@/network";
import StoriesDataSource from "../datasource/stories.datasource";

function useStoriesRepository() {
  const dataSource = new StoriesDataSource();

  return useAppQuery({
    queryKey: [dataSource.getQueryKey()],
    queryFn: () => dataSource.getStories(),
  });
}

export default useStoriesRepository;
