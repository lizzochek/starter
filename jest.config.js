module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '.*\\.(vue)$': '@vue/vue3-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.m?js$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!vuetify)'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
};
