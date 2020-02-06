import { css } from "@emotion/core"

const StyledButton = css`
  border: 5px solid #f15d2e;
  color: #f15d2e;
  padding: 1rem 3rem;
  font-weight: 700;
  font-size: 2.6rem;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #f15d2e;
    color: white;
  }
`

export default StyledButton
