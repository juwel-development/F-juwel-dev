const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const isProdBuild = process.argv.indexOf('-p') !== -1;

function getPlugins () {
	const plugins = [
		new BundleAnalyzerPlugin({
			analyzerMode: 'static'
		}),
		new CopyWebpackPlugin([
			{from: 'resources/images', to: 'resources/images'}
		]),
		new HtmlWebpackPlugin({
			title: 'Jens-Uwe Loessl',
			meta: {
				viewport: 'width=device-width, initial-scale=1'
			}
		}),
		new VueLoaderPlugin()
	];

	if (isProdBuild) {
		plugins.push(
			// new MiniCssExtractPlugin({
			// 	filename: 'style.css'
			// }),
			new UglifyJSPlugin({
				uglifyOptions: {
					beautify: true,
					compress: true,
					comments: false,
					ecma: 6,
					mangle: true
				}
			})
		);
	}

	return plugins;
}

module.exports = {
	mode: isProdBuild
		? 'production'
		: 'development',
	entry: {
		app: './src/index.ts',
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].[hash].js',
		chunkFilename: '[name].[chunkhash].js',
		publicPath: '/'
		// filename: isProdBuild
		// 	? 'app.[hash].js'
		// 	: 'app.js',
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					hotReload: !isProdBuild
				}
			},
			{
				test: /\.(ts|js)?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					appendTsSuffixTo: [/\.vue$/],
				}
			},
			{
				test: /\.sass$/,
				// loader: 'style-loader!css-loader!sass-loader',
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader'
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		historyApiFallback: true,
		watchOptions: {
			ignored: /node_modules/
		}
	},
	performance: {
		hints: false
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			minSize: 30000,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				},
				default: {
					minChunks: 1,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}
	},
	plugins: getPlugins(),
	devtool: isProdBuild
		? '#none'
		: '#eval-source-map',
};