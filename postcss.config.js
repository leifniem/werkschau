const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
	plugins: [
		postcssPresetEnv({
			stage: 0
		}),
		require('autoprefixer'),
		require('cssnano')({
			preset: 'advanced',
		}),
		require('postcss-combine-media-query'),
	],
};