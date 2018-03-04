const express = jest.fn(() => {
  const loggerProto = {
    use(toAdd) {
      this.added.push(toAdd);
    },
  };
  const app = Object.create(loggerProto, {
    message: {
      writable: true,
      value: 'APP',
    },
    used: {
      writable: true,
      value: [],
    },
  });
  return app;
});

express.static = jest.fn((path, config) => `${path}:${JSON.stringify(config)}`);

export default express;
