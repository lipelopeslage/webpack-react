module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' }
    ]
  }
};