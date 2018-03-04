import app from '../index';

jest.mock('../startApp', () => {
  return app => `${app}: started`;
});

jest.mock('../middlewares/registerCommonMiddleware', () => {
  return app => `${app.message}: registered common middleware`;
});

jest.mock('../middlewares/registerServerSideRenderMiddleware', () => {
  return app => `${app}: registered ssr middleware`;
});

describe('start app', () => {
  it('calls expected middlewares with expected app', () => {
    expect(app).toBe(
      'APP: registered common middleware: registered ssr middleware: started',
    );
  });
});
