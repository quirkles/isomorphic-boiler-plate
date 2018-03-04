/* global global */
import mockMatchMedia from '../src/__mocks__/matchMedia';

mockMatchMedia();

const mockedGetElementById = jest.fn(id => `element with id: ${id}`);
if (!global.document) {
  global.document = {
    getElementById: mockedGetElementById,
  };
} else {
  global.document.getElementById = mockedGetElementById
}
