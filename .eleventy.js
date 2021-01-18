const path = require('path');
const Image = require('@11ty/eleventy-img');

(async () => {
    for (let name of ['skytracks', 'holyclony', 'maximedupre']) {
        await Image('src/images/' + name + '.png', {
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
        input: 'src',
        output: 'dist',
    },
};
