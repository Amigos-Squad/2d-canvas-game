export const createScheme = (type: number, x: number, y: number) =>
  new Array(y).fill(0).map(() => new Array(x).fill(type));
