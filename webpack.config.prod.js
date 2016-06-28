var webpack = require('webpack');
var path = require('path');

module.exports = {
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
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		})
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
