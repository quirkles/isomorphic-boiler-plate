/* global __dirname */

import path from 'path';
import registerCommonMiddleware from '../registerCommonMiddleware';

jest.mock('../../logger', () => 'LOGGER');

const use = jest.fn();

const mockedApp = { use };

const distPath = path.join(__dirname, '../../../../dist');

describe('registerCommonMiddleware', () => {
  it('Uses the expected middleware', () => {
    expect(() => registerCommonMiddleware(mockedApp)).not.toThrow();
    expect(use).toHaveBeenCalledTimes(4);
    expect(use).toHaveBeenCalledWith('COMPRESSION');
    expect(use).toHaveBeenCalledWith('COOKIEPARSER');
    expect(use).toHaveBeenCalledWith(
      '/static',
      `${distPath}:${JSON.stringify({ maxAge: '365d' })}`,
    );
    expect(use).toHaveBeenCalledWith(
      `Logger with config: ${JSON.stringify({ winstonInstance: 'LOGGER' })}`,
    );
  });
});
