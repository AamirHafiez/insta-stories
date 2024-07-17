const delayExecution = (ms: number) =>
  new Promise((res) => setTimeout(res, ms));

export default delayExecution;
