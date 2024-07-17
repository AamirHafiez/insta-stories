export type ProgressBarProps = {
  duration: number;
  height: number;
  className?: string;
  totalProgresses?: number;
  currentProgress?: number;
  onProgressComplete?: (index: number) => void;
};
