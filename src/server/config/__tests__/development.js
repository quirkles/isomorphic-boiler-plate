import config from '../index';

describe('config', () => {
  it('has expected keys', () => {
    expect.assertions(2);
    const expectedConfigKeys = ['port', 'projectName'];
    const actualConfigKeys = Object.keys(config);
    expectedConfigKeys.forEach(keyName => {
      expect(actualConfigKeys).toContain(keyName);
    });
  });
});
