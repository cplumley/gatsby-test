import styled from "@emotion/styled"
import hexToRgba from "hex-to-rgba"

const StyledTopMenu = styled.div`
  background: ${(props: ComponentProps) =>
    hexToRgba(
      props.background.backgroundColor,
      props.background.backgroundOpacity / 100
    ) || "#FFF"};
  padding-right: ${(props: ComponentProps) => props.padding.right || "0"}px;
  padding-left: ${(props: ComponentProps) => props.padding.left || "0"}px;
  padding-top: ${(props: ComponentProps) => props.padding.top || "0"}px;
  padding-bottom: ${(props: ComponentProps) => props.padding.bottom || "0"}px;

  .content {
    display: flex;
    align-items: center;

    ul {
      margin: 0;
      margin-left: auto;
    }
  }
`

type ComponentProps = {
  padding: {
    bottom: number
    top: number
    left: number
    right: number
  }
  background: {
    backgroundColor: string
    backgroundOpacity: number
  }
}

export default StyledTopMenu
