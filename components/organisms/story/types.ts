import StoriesModel, {
  StoriesType,
  StoryElement,
} from "@/data/stories/datasource/stories.model";
import { StoryButtonSize } from "./config";

export type StoryProps = {
  data?: StoriesModel;
  isLoading?: boolean;
};

export type StoryButtonProps = {
  size?: StoryButtonSize;
  isLoading?: boolean;
  data?: Omit<StoryElement, "stories">;
  isSeen?: boolean;
  id: StoryButtonIdType;
};

export type StoryButtonIdType = number | string;

export type StoryRowProps = {
  children: React.ReactNode;
};

export type StoryViewProps = {
  isOpen?: boolean;
  data?: StoriesType | null;
  layoutId?: string;
};

export type StoryImageProps = {
  data: string;
};
