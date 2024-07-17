import { apiInstance } from "@/network";
import StoriesModel from "./stories.model";
import NetworkDataSource from "@/network/utils/NetworkDataSource";
import NetworkUrls from "@/network/config/NetworkUrls";

class StoriesDataSource extends NetworkDataSource {
  getUrl() {
    return NetworkUrls.STORIES;
  }

  getStories = () =>
    apiInstance.get<StoriesModel>(this.getUrl()).then((res) => res.data);
}

export default StoriesDataSource;
