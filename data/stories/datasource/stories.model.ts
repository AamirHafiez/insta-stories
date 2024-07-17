type StoriesModel = StoryElement[];

export type StoryElement = {
  img: string;
  stories: StoriesType;
  watched: boolean;
};

export type StoriesType = string[];

export default StoriesModel;
