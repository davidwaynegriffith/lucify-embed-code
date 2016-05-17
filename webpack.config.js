
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'lib');

var config = {
  entry: APP_DIR + '/embed/embed.js',
  output: {
    path: BUILD_DIR,
    filename: 'embed.js',
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js'],
    root: [path.join(__dirname, 'lib')],
    fallback: [path.join(__dirname, 'node_modules')],
  },
  resolveLoader: {
    modulesDirectories: ['node_modules'],
    fallback: path.join(__dirname, 'node_modules')
  },
  plugins: [
    function() {
      this.plugin('done', function(stats) {
        if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') == -1) {
          console.log(stats.compilation.errors);
          process.exit(1); // webpack doesn't exit with status code != 0 if there are errors
        }
      });
    }]
};

module.exports = config;
