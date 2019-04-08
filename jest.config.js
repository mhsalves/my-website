module.exports = {
  collectCoverage: true,
  setupFiles: ['<rootDir>/jest.setup.tests.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.framework.js'],
  coverageReporters: [
    'text-summary',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
  ],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
  ],
};
