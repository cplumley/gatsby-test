import styled from "@emotion/styled"

const StyledSubHeading = styled.h2`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: ${(props: StyledComponentProps) =>
      props.center ? `calc(50% - 30px)` : `0`};
    width: 60px;
    height: 8px;
    background: ${(props: StyledComponentProps) =>
      props.dark ? `white` : `#f15e2d`};
  }
`

type StyledComponentProps = {
  center?: boolean
  dark?: boolean
}

export default StyledSubHeading
