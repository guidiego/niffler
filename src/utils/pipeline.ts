export const pipeline = (obj: any, fns: any[]) => {
  return [obj, ...fns].reduce((a, c) => c(a));
};

export default pipeline;
