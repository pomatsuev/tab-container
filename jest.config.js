module.exports = {
  transform: {
    '^.+\\.(ts|tsx|js|jsx)?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
