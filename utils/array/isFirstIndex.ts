import isEmpty from "./isEmpty";

export default function isFirstIndex<K>(array: K[], index: number) {
  return !isEmpty(array) && index === 0;
}
