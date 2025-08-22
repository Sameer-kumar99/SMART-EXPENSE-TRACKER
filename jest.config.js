module.exports = {
  projects: [
    {
      displayName: 'server',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/server/**/*.test.js']
    },
    {
      displayName: 'client',
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/client/src/**/*.test.js'],
      transform: {
        '^.+\\.(js|jsx)$': 'babel-jest'
      },
      moduleFileExtensions: ['js', 'jsx']
    }
  ]
};
