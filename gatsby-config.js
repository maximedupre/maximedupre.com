const path = require('path')

module.exports = {
    siteMetadata: {
        title: `Maxime Dupré`,
        description: `Programming enthusiast, optimizer of all`,
        author: `@maximedupre`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
            },
        },
    ],
}
