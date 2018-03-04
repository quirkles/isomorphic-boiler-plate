export const createStore = jest.fn((reducers, middleware) =>
  JSON.stringify({
    reducers,
    middleware,
  }),
);

export const applyMiddleware = jest.fn(middleware =>
  JSON.stringify(middleware),
);

export const combineReducers = jest.fn(reducers => reducers);

export const compose = jest.fn(middleware => middleware);
