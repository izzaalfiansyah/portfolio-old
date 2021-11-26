const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		app: './src/app.js'
	},
	output: {
		path: path.resolve(__dirname, './public/dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.(html|svelte)$/,
				use: {
					loader: 'svelte-loader'
				}
			}
		]
	}
}