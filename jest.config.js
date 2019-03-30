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
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
  ],
};
