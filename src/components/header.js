import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

const Header = () => {
    const data = useStaticQuery(
        graphql`
            query {
                file(relativePath: { eq: "github-icon.png" }) {
                    childImageSharp {
                        fixed(width: 16, height: 16) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    )

    return (
        <header style={styles.header}>
            <div>
                Hey, I'm Maxime.
                <a
                    style={styles.githubLink}
                    href="https://github.com/maximedupre"
                >
                    <Img fixed={data.file.childImageSharp.fixed} />
                </a>
            </div>
            <div>I live in Montreal, Quebec, Canada.</div>
            <div>
                I like to write code and create robust digital experiences.
            </div>
        </header>
    )
}

const styles = {
    header: {
        padding: '1rem',
    },
    githubLink: {
        marginLeft: '0.3rem',
    },
}

export default Header
