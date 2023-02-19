export const flatDeep = (arr: any, d = 1) => {
  return d > 0
    ? arr.reduce(
        (acc: string | any[], val: any) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        []
      )
    : arr.slice();
};
