module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.setDataDeepMerge(true);

    // values Filter: MDN web docs
    eleventyConfig.addNunjucksFilter("keys", function (array) {
        return Object.keys(array);
    });

    eleventyConfig.addCollection("tagList",
        require("./_11ty/getTaglist"));

    return {
        templateFormats: ["njk", "md"]
    }
    
};
