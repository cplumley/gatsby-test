import styled from "@emotion/styled"

const StyledMenu = styled.ul`
  color: #fff;
  display: flex;
  align-self: center;

  a {
    text-decoration: none;
    color: ${(props: StyledMenuProps) => props.fontColor};
    position: relative;
    align-self: center;
    z-index: 99;
    text-transform: uppercase;
    font-weight: 700;

    &:before {
      content: "";
      position: absolute;
      width: 80%;
      height: 2px;
      bottom: -5px;
      left: 10%;
      background-color: #fff;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out;
    }

    &:not(.no-line):hover:before {
      visibility: visible;
      transform: scaleX(1);
    }

    li {
      list-style: none;
      padding: 0 10px;
    }
  }
`

type StyledMenuProps = {
  fontColor: string
}

export default StyledMenu
