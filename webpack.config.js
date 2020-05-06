const path = require("path");
const entryFile = "app.jsx";
const scssfiles = [`./scss/main.scss`];

module.exports = {
  entry: ['whatwg-fetch',`./js/${entryFile}`, scssfiles[0]],
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `build`)
  },
  watch: true,
  optimization: {
    minimize: false
  },
  devServer: {
    contentBase: path.join(__dirname, ``),
    publicPath: "/build/",
    compress: false,
    port: 3001
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].css',
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader?-url'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
                outputStyle: 'expanded',
            }
          }
        ]
      }
    ]
  }
};
