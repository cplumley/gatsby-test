import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import { useVendorData } from "../../particles/hooks/useVendorData"
import StyledPostCarousel from "./PostCarousel.style"
import Content from "../../particles/Content"
import Carousel from "../carousel/Carousel"

const PostCarousel = ({ title, cpt_all, background_color }) => {
  let allPosts = []

  if (cpt_all === "vendors") {
    const vendors = useVendorData()
    vendors.map(vendor => {
      allPosts.push(vendor)
      return null
    })
  }

  return (
    <StyledPostCarousel background={background_color}>
      <Content>
        <h3>{title}</h3>
        <Carousel items={allPosts} slidesPerScroll={2} infinite arrows />
      </Content>
    </StyledPostCarousel>
  )
}

export default PostCarousel
