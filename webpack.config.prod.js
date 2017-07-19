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
			filename : 'js/[name].js'
		},
		resolve: {
			extensions: ['.ts', '.js', '.css', '.scss', '.html']
		},
		module: {
			loaders : [
				{
					test: /\.ts$/,
					loader: 'strip-loader?strip[]=debug,strip[]=console.debug,strip[]=console.log!ng-annotate-loader!ts-loader'
				},
				{
					test: /\.js$/,
					loader: 'strip-loader?strip[]=debug,strip[]=console.debug,strip[]=console.log!ng-annotate-loader'
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
			new webpack.LoaderOptionsPlugin({
				minimize: true,
				debug: false
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				},
				output: {
					comments: false
				},
				sourceMap: false
			}),
			new ExtractTextPlugin('./css/gs.css'),
			new HtmlWebpackPlugin({
				template: './src/index.html.ejs',
				inject: false,
				filename: 'index.html',minify: {
					collapseWhitespace: true,
					removeComments: true,
					removeScriptTypeAttributes: true,
					removeStyleLinkTypeAttributes: true,
					minifyCSS: true
				}
			}),
			new CopyWebpackPlugin([

			])
		]
	}
];