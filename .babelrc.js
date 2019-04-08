const envConfig = require('./env.config.js');

module.exports = {
  env: {
    development: {
      presets: ['next/babel'],
      plugins: [
        ['styled-components', { ssr: true, displayName: true }],
        ['transform-define', envConfig],
      ],
    },
    production: {
      presets: ['next/babel'],
      plugins: [
        ['styled-components', { ssr: true, displayName: false }],
        ['transform-define', envConfig],
      ],
    },
    test: {
      presets: [['next/babel', { 'preset-env': { modules: 'commonjs' } }]],
      plugins: [
        ['styled-components', { ssr: false, displayName: false }],
        ['transform-define', envConfig],
      ],
    },
  },
};
