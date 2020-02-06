import React from "react"
import SubHeading from "../../atoms/SubHeading/SubHeading"
import Content from "../../particles/Content"
import BackgroundImage from "gatsby-background-image"
import { rowBkgImage, rowBkgColor } from "./Row.style"
import hexToRgba from "hex-to-rgba"

const Row = ({
  row_title,
  row_text,
  row_text_align,
  row_gradient_starting_color,
  row_gradient_end_color,
  row_gradient,
  row_gradient_direction,
  row_dark_background,
  row_background_overlay_color,
  row_background_image,
  row_move_text_to_right_column,
}) => {
  const rowContent = (
    <Content>
      <section>
        <SubHeading
          title={row_title}
          dark={row_dark_background || undefined}
          center={row_text_align === "center" ? true : undefined}
        />
      </section>
      <section>
        <p>{row_text}</p>
      </section>
    </Content>
  )

  const rowOptions = {
    isDark: row_dark_background,
    textAlign: row_text_align,
    textRight: row_move_text_to_right_column,
    background: {
      color: row_background_overlay_color,
      gradient: row_gradient,
      gradientStart: row_gradient_starting_color,
      gradientEnd: row_gradient_end_color,
      gradientDirection: row_gradient_direction,
    },
  }

  console.log(rowOptions)

  if (row_background_image) {
    const {
      imageFile: {
        childImageSharp: { fluid },
      },
    } = row_background_image

    const backgroundStack = [
      fluid,
      `linear-gradient(${gradientDirection(
        row_gradient_direction
      )}, ${hexToRgba(row_gradient_starting_color + `b3`)}, ${hexToRgba(
        row_gradient_end_color + `33`
      )}) `,
    ].reverse()
    return (
      <BackgroundImage css={rowBkgImage(rowOptions)} fluid={backgroundStack}>
        {rowContent}
      </BackgroundImage>
    )
  } else {
    return <div css={rowBkgColor(rowOptions)}>{rowContent}</div>
  }
}

function gradientDirection(value) {
  switch (value) {
    case `right`:
      return `to right`
    case `left`:
      return `to left`
    case `top`:
      return `to top`
    case `bottom`:
      return `to bottom`
    case `top_left`:
      return `to top left`
    case `top_right`:
      return `to top right`
    case `bottom_left`:
      return `to bottom left`
    case `bottom_right`:
      return `to bottom right`
    default:
      return null
  }
}

export default Row
