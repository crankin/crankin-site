import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  // Optimizes every <img> in the output: resizes, converts to modern formats,
  // and adds width/height. Images are written to _site/img/.
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["avif", "webp", "jpeg"],
    widths: ["auto"],
    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
    },
  });
}

export const config = {
  dir: {
    input: ".",
    output: "_site",
  },
};
