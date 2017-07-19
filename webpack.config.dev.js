var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require("path");

var targetPath = path.resolve(__dirname, 'target/');

module.exports = [
	{
		context: __dirname + '',
		entry: {
			vendor: './src/vendor.ts',
			gs: './src/gs.ts'
		},
		output : {
			path: targetPath,
			filename : 'js/[name].js',
			sourceMapFilename: '[file].map'
		},
		watchOptions: {
			ignored: /node_modules/
		},
		devtool: '#cheap-module-source-map',
		resolve: {
			extensions: ['.ts', '.js', '.css', '.scss', '.html']
		},
		module: {
			loaders : [
				{
					test: /\.ts$/,
					loader: 'ng-annotate-loader!ts-loader'
				},
				{
					test: /\.js$/,
					loader: 'ng-annotate-loader'
				},
				{
					test : /\.html$/,
					loader : 'raw-loader'
				},
				{
					test : /\.scss$/,
					exclude: /node_modules/,
					loader: ExtractTextPlugin.extract({
						use: 'css-loader?-minimize&sourceMap!sass-loader?sourceMap',
						fallback: 'style-loader'
					})
				},
				{
					test : /\.png$/,
					loader : 'url-loader?limit=16384&mimetype=image/png'
				},
				{
					test : /\.svg(\?v=\d+\.\d+\.\d+)?$/,
					loader : 'url-loader?limit=16384&mimetype=image/svg+xml'
				},
				{
					test: /(fontawesome).*\.(eot|otf|svg|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/i,
					loader: 'file-loader?name=./_fonts/font-awesome/[name].[ext]&publicPath=./../'
				}
			]
		},
		plugins : [
			new webpack.ProvidePlugin({
				'$': 'jquery',
				'jQuery': 'jquery',
				'window.jQuery': 'jquery'
			}),
			new webpack.optimize.CommonsChunkPlugin({
				name: ['vendor']
			}),
			new webpack.DefinePlugin({
				'ENV': JSON.stringify('development')
			}),
			new ExtractTextPlugin('./css/gs.css'),
			new HtmlWebpackPlugin({
				template: './src/index.html.ejs',
				inject: false,
				filename: 'index.html'
			}),
			new CopyWebpackPlugin([

			])
		]
	}
];