const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  // Aliases are in relation to the _includes folder
  // eleventyConfig.addLayoutAlias('newproject', 'layouts/newproject.html');

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('admin');
  eleventyConfig.addPassthroughCopy('thumbs');
  // eleventyConfig.addPassthroughCopy('images');

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if( n < 0 ) {
      return array.slice(n);
    }
    return array.slice(0, n);
  });

  return {
    dir: {
      input: "./",      // Equivalent to Jekyll's source property
      output: "./_site" // Equivalent to Jekyll's destination property
    },
    passthroughFileCopy: true
  };
};
