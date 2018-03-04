import { mount } from 'enzyme';

export default {
  renderToString: jest.fn(component => mount(component).html()),
};
