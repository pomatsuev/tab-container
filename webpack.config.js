const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const onDevMode = process.env.NODE_ENV === 'development';
console.log('Development mode:', onDevMode);

module.exports = {
  context: path.resolve(__dirname, 'src'),
  devtool: '',
  entry: {
    index: './index.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname),
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.css'],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  externals: { react: 'commonjs react' },
};
