var path = require('path');
var srcPath = path.join(__dirname, 'src/js');
var buildPath = path.join(__dirname, 'dist');

module.exports = {
	context: srcPath,
	entry: path.join(srcPath, 'likeLand.jsx'),
	output: {
		path: buildPath,
		filename: "bundle.js"
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};