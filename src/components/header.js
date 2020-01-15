import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div style={styles.div}>
      <h1 style={styles.title}>
        <Link to="/" style={styles.link}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const styles = {
  div: {
    padding: `1.45rem 1.0875rem`,
  },
  title: {
    margin: 0,
  },
  link: {
    color: `white`,
    textDecoration: `none`,
  },
}

export default Header
