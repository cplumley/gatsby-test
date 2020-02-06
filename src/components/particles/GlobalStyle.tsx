import { css } from "@emotion/core"

const GlobalStyle = css`
  html {
    box-sizing: border-box;
    overflow-y: scroll;

    font-size: 50%;
    margin: 0;
    padding: 0;
  }
  body {
    overflow-x: hidden;
    scroll-behavior: smooth;
    font-family: "Lato", Helvetica, sans-serif;

    background: white;

    font-size: 2.2rem;
    line-height: 1.5;
    margin: 0;
    padding: 0;

    color: #3c2413;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0 0 1.5rem;
      padding: 0;
      font-weight: 900;
      text-transform: uppercase;
    }

    h1 {
      font-size: 10rem;
    }

    h2 {
      font-size: 4.5rem;
    }

    h3 {
      font-size: 4rem;
    }

    h4 {
      font-size: 2.9rem;
    }

    h5,
    button {
      font-size: 2.6rem;
    }

    h6 {
      font-size: 2.2rem;
    }

    a {
      text-decoration: none;
    }
  }
`

export default GlobalStyle
