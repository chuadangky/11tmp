module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.setDataDeepMerge(true);

    eleventyConfig.addCollection("tagList",
        require("./_11ty/getTaglist"));

    return {
        templateFormats: ["njk", "md"]
    }
    
};
