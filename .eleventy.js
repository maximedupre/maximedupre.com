const path = require('path');
const Image = require('@11ty/eleventy-img');

(async () => {
    for (let i of [
        { name: 'skytracks', ext: 'png', width: 300 },
        { name: 'holyclony', ext: 'png', width: 300 },
        { name: 'maximedupre', ext: 'png', width: 300 },
        { name: 'favicon', ext: 'png', width: 100 },
    ]) {
        await Image('src/images/' + i.name + '.' + i.ext, {
            widths: [i.width],
            formats: ['webp'],
            outputDir: 'dist/images',
            filenameFormat: function (id, src, width, format, options) {
                const extension = path.extname(src);
                const name = path.basename(src, extension);

                return `${name}.${format}`;
            },
        });
    }
})();

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/fonts');
    eleventyConfig.addPassthroughCopy({
        'node_modules/@fortawesome/fontawesome-free/css/brands.min.css':
            'styles/brands.min.css',
    });
    eleventyConfig.addPassthroughCopy({
        'node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css':
            'styles/fontawesome.min.css',
    });
    eleventyConfig.addPassthroughCopy({
        'node_modules/@fortawesome/fontawesome-free/webfonts': 'webfonts',
    });

    return {
        dir: {
            layouts: 'layouts',
            input: 'src',
            output: 'dist',
        },
    };
};
