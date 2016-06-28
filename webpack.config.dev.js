var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval-source-map',
  context: __dirname,
  entry: ['./app/frontend/javascripts/main.js'],
	output: {
		path: path.join(__dirname, 'app', 'assets', 'javascripts'),
		filename: 'bundle.js',
		publicPath: '/assets'
	},
	resolve: {
		extensions: ['', '.js']
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	}
};
