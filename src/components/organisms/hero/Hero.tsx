import React from "react"
import BackgroundImage from "gatsby-background-image"
import Content from "../../particles/Content"
import heroImage from "./Hero.style"
import SecondaryButton from "../../atoms/Buttons/SecondaryButton/SecondaryButton"

import hexToRgba from "hex-to-rgba"

const Hero = ({
  hero_CTA,
  hero_background_overlay,
  hero_background_image,
  hero_cta_buttons,
}) => {
  const {
    imageFile: {
      childImageSharp: { fluid },
    },
  } = hero_background_image

  const backgroundStack = [
    fluid,
    `linear-gradient(${hexToRgba(hero_background_overlay + `33`)}, ${hexToRgba(
      hero_background_overlay + `b3`
    )}) `,
  ].reverse()

  return (
    <BackgroundImage Tag="div" css={heroImage} fluid={backgroundStack}>
      <Content maxWidth="1600px" className="hero-grid">
        <h1>{hero_CTA}</h1>
        <section>
          {hero_cta_buttons.map((btn, idx) => {
            const url = btn.link.url.split("/")

            return (
              <SecondaryButton url={`/products/${url[2]}`} key={idx}>
                {btn.link.title}
              </SecondaryButton>
            )
          })}
        </section>
      </Content>
    </BackgroundImage>
  )
}

export default Hero
