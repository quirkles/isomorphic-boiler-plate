import logger from '../logger';
import startApp from '../startApp';

jest.mock('../logger', () => ({
  info: jest.fn(),
}));

jest.mock('../config', () => ({
  port: 'TEST_PORT',
  projectName: 'TEST-NAME',
}));

const listen = jest.fn((port, cb) => {
  cb();
});

const testApp = {
  listen,
};

describe('startApp', () => {
  it('returns a function that is called with the app and sets it up as expected', () => {
    expect(() => {
      startApp(testApp);
    }).not.toThrow();

    expect(logger.info).toHaveBeenCalledWith(
      'TEST NAME listening on port TEST_PORT',
    );
  });
});
