import React from "react"
import Img from "gatsby-image"

import { useLogo } from "./Logo.data"

const Logo = (props: LogoProps) => {
  const LogoData = useLogo()

  return (
    <Img
      fixed={LogoData}
      imgStyle={{ objectFit: "contain" }}
      style={{ height: `${props.height}px`, maxWidth: `${props.maxWidth}px` }}
    />
  )
}

type LogoProps = {
  height: number
  maxWidth: number
}

export default Logo
