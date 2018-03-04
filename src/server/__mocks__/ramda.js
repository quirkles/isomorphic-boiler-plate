export const pipe = jest.fn((...fns) => arg => {
  let result = arg;
  for (let n = 0; n < fns.length; n++) {
    result = fns[n](result);
  }
  return result;
});
