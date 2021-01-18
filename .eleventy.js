const path = require('path');
const Image = require('@11ty/eleventy-img');

(async () => {
    for (let i of [
        { name: 'skytracks', ext: 'png' },
        { name: 'holyclony', ext: 'png' },
        { name: 'maximedupre', ext: 'png' },
        { name: 'responsive-ping-pong-images', ext: 'png' },
    ]) {
        await Image('src/images/' + i.name + '.' + i.ext, {
            widths: [300],
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

module.exports = {
    dir: {
        layouts: 'layouts',
        input: 'src',
        output: 'dist',
    },
};
