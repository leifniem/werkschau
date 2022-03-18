const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
	plugins: [
		postcssPresetEnv({
			stage: 0
		}),
		require('autoprefixer'),
		require('cssnano')({
			preset: 'advanced',
			zindex: false
		}),
		require('postcss-combine-media-query'),
	],
};