const envConfig = require('./env.config.js');

module.exports = {
  env: {
    development: {
      presets: ['next/babel'],
      plugins: [
        ['transform-define', envConfig],
      ],
    },
    production: {
      presets: ['next/babel'],
      plugins: [
        ['transform-define', envConfig],
      ],
    },
    test: {
      presets: [['next/babel', { 'preset-env': { modules: 'commonjs' } }]],
      plugins: [
        ['transform-define', envConfig],
      ],
    },
  },
};
