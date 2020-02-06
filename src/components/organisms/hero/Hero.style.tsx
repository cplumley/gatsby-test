import { css } from "@emotion/core"

const heroImage = css`
  height: calc(100vh - 190px);
  width: 100%;

  .hero-grid {
    display: grid;
    height: 100%;
  }

  h1 {
    color: white;
    text-align: center;
    align-self: end;
  }

  section {
    align-self: center;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    box-sizing: inherit;

    @media (max-width: 1700px) {
      padding: 0 5rem;
    }
  }
`

export default heroImage
