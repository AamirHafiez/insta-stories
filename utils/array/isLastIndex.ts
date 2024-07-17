import isEmpty from "./isEmpty";

export default function isLastIndex<K>(array: K[], index: number) {
  return !isEmpty(array) && array.length - 1 === index;
}
