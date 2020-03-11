import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  mode: 'none',
  target: 'node',
  devtool: 'source-map',
  externals: [nodeExternals()],
  entry: {
    js: [path.resolve(__dirname, './suite/index.js')],
  },
  output: {
    path: __dirname,
    filename: 'testBundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['null-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css'],
  },
};
