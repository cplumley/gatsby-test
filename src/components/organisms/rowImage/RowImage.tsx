import React from "react"
import Content from "../../particles/Content"
import SubHeading from "../../atoms/SubHeading/SubHeading"
import StyledRowImage from "./RowImage.style"
import BackgroundImage from "gatsby-background-image"
import PrimaryButton from "../../atoms/Buttons/PrimaryButton/PrimaryButton"

const RowImage = ({
  row__image_title,
  row_image_text,
  row_image_field,
  image_placement,
}) => {
  return (
    <StyledRowImage imagePlacement={image_placement || undefined}>
      <Content>
        <section>
          <SubHeading title={row__image_title} />
          <p>{row_image_text}</p>
          <PrimaryButton url="/#">Testing</PrimaryButton>
        </section>
        <BackgroundImage
          Tag="section"
          style={{ marginRight: `1rem` }}
          fluid={row_image_field.imageFile.childImageSharp.fluid}
        />
      </Content>
    </StyledRowImage>
  )
}

export default RowImage
