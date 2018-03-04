export const routerMiddleware = jest.fn(
  history => `routerMiddleware with ${JSON.stringify(history)}`,
);

export const routerReducer = jest.fn();
