const Image = require("@11ty/eleventy-img");
const tinysvg = require('@sardine/eleventy-plugin-tinysvg');

async function imageShortcode(src, alt, sizes) {
	let metadata = await Image(src, {
		widths: [640, 960, 1280, 1920],
		formats: ["webp", "jpeg", "svg"],
		svgShortCircuit: true
	});

	let imageAttributes = {
		alt,
		sizes,
		loading: "lazy",
		decoding: "async",
	};

	// You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
	return Image.generateHTML(metadata, imageAttributes);
}


module.exports = function (eleventyConfig) {
	/**
	 * Why copy the /public directory?
	 *
	 * Slinkity uses Vite (https://vitejs.dev) under the hood for processing styles and JS resources
	 * This tool encourages a /public directory for your static assets like social images
	 * To ensure this directory is discoverable by Vite, we copy it to our 11ty build output like so:
	 */
	eleventyConfig.addPassthroughCopy('public')
	eleventyConfig.addPassthroughCopy('img')

	eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
	eleventyConfig.addJavaScriptFunction("image", imageShortcode);

	eleventyConfig.addPlugin(tinysvg);
	// eleventyConfig.addPlugin(tinyHTML);

	return {
		markdownTemplateEngine: 'njk',
		dir: {
			input: 'src',
		},
	}
}