const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = (env, args) => {
	return {
		context: path.resolve(__dirname, 'src'),
		entry: () => path.resolve(__dirname, 'src/index.jsx'),
		output: {
			path: path.resolve(__dirname, 'src/dist'),
			filename: 'bundle.js',
			publicPath: '/'
		},
		module: {
			rules: [{
				test: /\.jsx?$/,
				include: [path.resolve(__dirname, 'src')],
				exclude: [path.resolve(__dirname, 'node_modules')],
				enforce: 'pre',
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react']
					}
				}]
			}, {
				test: /\.css$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}]
			}, {
				test: /\.scss$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'resolve-url-loader'
				}, {
					loader: 'sass-loader'
				}]
			}, {
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 3400
					}
				}]
			}, {
				test: /\.(eot|ttf|woff|woff2|svg)$/,
				use: [{
					loader: 'file-loader'
				}]
			}]
		},
		resolve: {
			modules: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'src')],
			alias: {
				Components: path.resolve(__dirname, 'src/components/'),
				Pages: path.resolve(__dirname, 'src/pages/')
			},
			extensions: ['.js', '.json', '.jsx']
		},
		devtool: "eval-source-map",
		devServer: {
			hot: true,
			contentBase: path.join(__dirname, 'src'),
			compress: true,
			historyApiFallback: true,
			inline: true
		},
		plugins: [
			new HtmlWebpackPlugin({
				hot: true,
				lazy: true,
				inject: 'body',
				hash: true,
				template: path.resolve(__dirname, "src/index.html")
			}),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.optimize.UglifyJsPlugin(),
			new webpack.optimize.AggressiveMergingPlugin()
		]
	}
}