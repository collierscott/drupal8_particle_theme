module.exports = {
  presets: [['@babel/preset-env', { useBuiltIns: 'entry', corejs: 2 }]],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
  ],
};
