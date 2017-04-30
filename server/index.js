const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const DashboardPlugin = require('webpack-dashboard/plugin');
const routes = require('./routes.js');
const config = require('../webpack.config.js');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';
const port = !isProduction ? 3000 : process.env.PORT;
const app = express();
const compiler = webpack(config);
// compiler.apply(new DashboardPlugin());
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: isProduction ? './build' : './src',
  historyApiFallback: true,
  compress: isProduction,
  inline: !isProduction,
  hot: !isProduction,
  stats: {
    assets: true,
    children: false,
    chunks: false,
    hash: false,
    modules: false,
    publicPath: false,
    timings: true,
    version: false,
    warnings: true,
    colors: {
      green: '\u001b[32m',
    },
  }
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));
routes.setup(app);
app.get('*', function response(req, res) {
  // res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'src/index.html')));
  res.send(path.join(__dirname, 'src/index.html'));
  res.end();
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
