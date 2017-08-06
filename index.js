const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const config = require('./webpack.config.js');
const app = express();
const compiler = webpack(config);
const PORT = process.env.PORT || 8080;

var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.use(webpackDevMiddleware(compiler, {
	noInfo: true
}));
app.use(webpackHotServerMiddleware(compiler, {
	serverRendererOptions: {
		title: 'Edtern Landing Page'
	}
}));

app.listen(PORT, () => {
	console.log('Server started: http://localhost:' + PORT + '/');
});
