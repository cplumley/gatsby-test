import { css } from "@emotion/core"

const SharedCSS = props => css`
  text-align: ${props.textAlign || "center"};
  padding: 5rem;
  ${props.isDark ? `color: white;` : ``}

  div section {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    grid-column: ${props.textAlign === "center"
      ? `1/3`
      : props.textRight
      ? `2`
      : `1`};
    width: ${props.textAlign === "center" ? `70%` : undefined};
    margin: ${props.textAlign === "center" ? `0 auto` : `0`};
    padding: 2rem 0 0;
  }

  p {
    grid-column: ${props.textAlign === "center"
      ? `1/3`
      : props.textRight
      ? `2`
      : `1`};
    width: ${props.textAlign === "center" ? `70%` : undefined};
    margin: ${props.textAlign === "center" ? `0 auto` : `0`};
    padding: 2rem 0 0;
  }
`
export const rowBkgImage = props => css`
  ${SharedCSS(props)}
`

export const rowBkgColor = props => css`
  background: ${props.background.color};
  ${SharedCSS(props)}
`
