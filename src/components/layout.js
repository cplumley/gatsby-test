/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Global } from "@emotion/core"
import styled from "@emotion/styled"

import GlobalStyle from "./particles/GlobalStyle"
import "normalize.css"
import Header from "./organisms/header/Header"
import Footer from "./organisms/footer/Footer"

const Wrapper = styled("div")``

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Global styles={GlobalStyle} />
      <Header />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
