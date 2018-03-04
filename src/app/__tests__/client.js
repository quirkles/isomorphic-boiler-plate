import ReactDOM from 'react-dom';

import { getDomTree } from '../client';

jest.mock('react-dom', () => ({
  hydrate: jest.fn(),
}));

jest.mock('../routes', () => 'ROUTES');
jest.mock('../reducers', () => 'REDUCERS');

describe('client bootstrap', () => {
  it('renders the dom tree and hydrates the initial state', () => {
    const renderedDomTree = getDomTree();
    expect(renderedDomTree).toMatchSnapshot();
    expect(ReactDOM.hydrate).toHaveBeenCalledWith(
      renderedDomTree,
      'element with id: app',
    );
  });
});
