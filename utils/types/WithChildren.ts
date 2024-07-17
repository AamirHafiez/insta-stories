export type WithOptionalChildren<T> = {
  children?: React.ReactNode;
} & T;

export type WithRequiredChildren<T> = {
  children: React.ReactNode;
} & T;
