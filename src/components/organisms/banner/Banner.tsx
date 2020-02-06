import React from "react"
import StyledBanner from "./Banner.style"

const Banner = (props: BannerProps) => {
  return (
    <StyledBanner>
      <div className="content">
        <h2>{props.title}</h2>
      </div>
    </StyledBanner>
  )
}

type BannerProps = {
  backgroundImage: string
  title: string
}

export default Banner
