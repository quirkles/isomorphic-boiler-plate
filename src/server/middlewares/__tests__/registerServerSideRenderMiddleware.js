/* global global */

import registerServerSideRenderMiddleware, {
  renderApp,
} from '../registerServerSideRenderMiddleware';

jest.mock('../../../app/routes', () => 'ROUTES');

jest.mock('../../../../bundleInfo.json', () => ({
  vendor: {
    js: 'path/to/vendor/js',
  },
  bundle: {
    js: 'path/to/bundle/js',
  },
}));

describe('registerServerSideMiddleware', () => {
  describe('getBundleInfo', () => {
    let getBundleInfo;
    beforeEach(() => {
      jest.resetModules();
    });
    it('gets expected bundle in development', () => {
      global.process.env.NODE_ENV = 'development';
      getBundleInfo = require('../registerServerSideRenderMiddleware')
        .getBundleInfo;
      expect(getBundleInfo()).toEqual({
        bundle: { js: '/static/bundle.js' },
        vendor: { js: '/static/vendor.js' },
      });
    });
    it('gets expected bundle in production', () => {
      global.process.env.NODE_ENV = 'production';
      getBundleInfo = require('../registerServerSideRenderMiddleware')
        .getBundleInfo;
      expect(getBundleInfo()).toEqual({
        bundle: { js: 'path/to/bundle/js' },
        vendor: { js: 'path/to/vendor/js' },
      });
    });
  });
  describe('renderApp', () => {
    beforeEach(() => {
      jest.resetModules();
    });
    const mockRequest = {
      url: 'url-hit',
    };
    const mockResponse = {
      end: jest.fn(),
      write: jest.fn(),
    };
    it('Handles requests and calls response with expected information', () => {
      expect(() => renderApp(mockRequest, mockResponse)).not.toThrow();
      expect(mockResponse.write).toHaveBeenCalledWith(`<!doctype html><div id="app"><div>"url-hit"{}<div>"ROUTES"</div></div></div><script type="text/javascript" src=path/to/vendor/js></script><script type="text/javascript" src=path/to/bundle/js></script>`); // eslint-disable-line
      expect(mockResponse.end).toHaveBeenCalled();
    });
  });
  describe('registerServerSideRenderMiddleware', () => {
    const use = jest.fn();

    const mockedApp = { use };

    it('calls app.use with render middleware', () => {
      expect(() => registerServerSideRenderMiddleware(mockedApp)).not.toThrow();
      expect(use).toHaveBeenCalledWith(renderApp);
    });
  });
});
