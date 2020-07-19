module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.setDataDeepMerge(true);

    return {
        templateFormats: ["njk", "md"]
    }
    
};
