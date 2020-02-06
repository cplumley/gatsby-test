import styled from "@emotion/styled"

const StyledSelection = styled.div`
  color: #fff;

  ul {
    margin: 0;
  }
`

type ComponentProps = {
  background: {
    backgroundColor: string
    backgroundOpacity: number
  }
}

export default StyledSelection
