import styled from "@emotion/styled"
import hexToRgba from "hex-to-rgba"

const StyledSelect = styled.ul`
  background: ${(props: StyledProps) =>
    hexToRgba(
      props.background.backgroundColor,
      props.background.backgroundOpacity / 100
    ) || "#FFF"};

  border: 2px solid #fff;
  text-align: left;
  padding: 0.5rem 10rem 0.5rem 1.5rem;
  position: relative;
  color: #fff;
  width: ${(props: StyledProps) => props.width}px;
  cursor: pointer;
  user-select: none;

  &:after {
    content: "\u25BE";
    position: absolute;
    right: 10px;
    top: 0px;
    font-size: 1.25em;
    transition: all 0.15s ease;
  }

  &.open {
    background: #fff;
    color: #5d412d;
    border: 2px solid #efefec;

    &:after {
      transform: rotateZ(-180deg);
      top: 5px;
    }

    ul {
      border: 2px solid #efefec;
      max-height: 500px;
    }
  }

  ul {
    margin: 0 0 0 -2px;
    padding: 0 0 0;
    background: #fff;
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
    width: 100%;
    max-height: 0;
    position: absolute;
    top: 4rem;
    left: -2px;
    overflow: hidden;
    z-index: 100;
    -webkit-transition: max-height 0.2s ease;
    -moz-transition: max-height 0.2s ease;
    -o-transition: max-height 0.2s ease;
    transition: max-height 0.2s ease;

    & > li {
      list-style: none;
      overflow: hidden;
      padding: 5px;
      background: #fff;

      &:hover {
        background: #efefec;
      }
    }
  }
`

type StyledProps = {
  width: number
  background: {
    backgroundColor: string
    backgroundOpacity: number
  }
}

export default StyledSelect
