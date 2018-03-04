const path = require('path');

const jestConfig = {
  rootDir: './src',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/../coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  collectCoverageFrom: ['**/*.{js,jsx}'],
  setupFiles: [
    path.resolve('jest/setupEnzyme.js'),
    path.resolve('jest/setupGlobals.js'),
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)(spec|test).js?(x)'],
};

module.exports = jestConfig;
