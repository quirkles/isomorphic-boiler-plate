export const createLogger = jest.fn(config => {
  const loggerProto = {
    add(toAdd) {
      this.added.push(toAdd);
    },
  };
  const logger = Object.create(loggerProto, {
    config: {
      writable: true,
      value: config,
    },
    added: {
      writable: true,
      value: [],
    },
  });
  logger.config = config;
  return logger;
});

export const transports = {
  File: jest.fn(config => ({
    ...config,
    transportType: 'file',
  })),
  Console: jest.fn(config => ({
    ...config,
    transportType: 'console',
  })),
};

export const format = {
  simple: jest.fn(() => 'simpleFormat'),
  json: jest.fn(() => 'jsonFormat'),
};
