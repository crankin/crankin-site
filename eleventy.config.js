export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("thumbs");
}

export const config = {
  dir: {
    input: ".",
    output: "_site",
  },
};
