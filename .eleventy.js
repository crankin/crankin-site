const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  // Aliases are in relation to the _includes folder
  // eleventyConfig.addLayoutAlias('newproject', 'layouts/newproject.html');

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('thumbs');

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if( n < 0 ) {
      return array.slice(n);
    }
    return array.slice(0, n);
  });

  return {
    dir: {
      input: "./",
      output: "./_site"
    },
    passthroughFileCopy: true
  };
};
