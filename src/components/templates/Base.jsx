import React from "react"
import { ThemeProvider } from "theme-ui"
import { Global } from "@emotion/core"
import Theme from "../particles/Theme"
import Header from "../organisms/header/Header"
import GlobalStyle from "../particles/GlobalStyle"
import Footer from "../organisms/footer/Footer"
import SEO from "../seo"

const Base = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Global styles={GlobalStyle} />
      <SEO />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default Base
