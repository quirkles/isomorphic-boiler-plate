/* global global */

describe('logger', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('creates expected logger when its production env', () => {
    global.process.env.NODE_ENV = 'production';
    const logger = require('../logger').default;
    expect(logger.config).toEqual({
      format: 'jsonFormat',
      level: 'info',
      transports: [
        {
          filename: 'error.log',
          level: 'error',
          transportType: 'file',
        },
        { filename: 'combined.log', transportType: 'file' },
      ],
    });
    expect(logger.added).toEqual([]);
  });
  it('creates expected logger when its not production env', () => {
    global.process.env.NODE_ENV = 'development';
    const logger = require('../logger').default;
    expect(logger.config).toEqual({
      format: 'jsonFormat',
      level: 'info',
      transports: [
        {
          filename: 'error.log',
          level: 'error',
          transportType: 'file',
        },
        { filename: 'combined.log', transportType: 'file' },
      ],
    });
    expect(logger.added).toEqual([
      {
        format: 'simpleFormat',
        transportType: 'console',
      },
    ]);
  });
});
