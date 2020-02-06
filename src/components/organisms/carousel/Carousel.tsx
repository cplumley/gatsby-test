import React, { useState, useEffect, useRef } from "react"
import Img from "gatsby-image/withIEPolyfill"
import StyledCarousel from "./Carousel.style"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const Carousel = (props: CarouselProps) => {
  const ref = useRef(null)

  const [state, setState] = useState({
    displayed: props.items,
    currentPosition: 0,
    left: 0,
  })

  const [width, setWidth] = useState(0)

  useEffect(() => {
    const width = ref.current ? ref.current.offsetWidth : 0
    setWidth(width + 32)
  }, [ref.current])

  const transition = width * (props.slidesPerScroll || 1)

  const carouselForward = () => {
    const next = state.currentPosition + (props.slidesPerScroll || 1)
    const displayed = state.displayed.concat(
      state.displayed.slice(state.currentPosition, next)
    )

    setState({
      displayed: displayed,
      currentPosition: next,
      left: state.left - transition,
    })
  }

  const carouselBackward = () => {
    const next = state.currentPosition - (props.slidesPerScroll || 1)
    if (state.currentPosition > 0) {
      setState({
        displayed: state.displayed,
        currentPosition: next,
        left: state.left + transition,
      })
    }
  }

  useEffect(() => {
    const scroll = setTimeout(carouselForward, 5000)
    return () => clearTimeout(scroll)
  }, [state])

  return (
    <StyledCarousel>
      <FiChevronLeft
        onClick={carouselBackward}
        style={{
          position: "absolute",
          left: "-2.5rem",
          top: "50%",
          cursor: state.currentPosition > 0 ? `pointer` : `default`,
        }}
      />
      <section>
        {state.displayed.map(activeItem => {
          if (activeItem.node) {
            let vendor = activeItem.node.VendorInfo

            return vendor.logo && vendor.logo.imageFile.childImageSharp ? (
              <a
                href={vendor.externalUrl}
                target="_blank"
                style={{ left: `${state.left}px` }}
                ref={ref}
              >
                <Img
                  fluid={vendor.logo.imageFile.childImageSharp.fluid}
                  objectFit="contain"
                  style={{ mixBlendMode: "multiply" }}
                />
              </a>
            ) : (
              <p>Error loading vendor</p>
            )
          } else {
            return null
          }
        })}
      </section>

      <FiChevronRight
        onClick={carouselForward}
        style={{
          position: "absolute",
          right: "-2.5rem",
          top: "50%",
          cursor: "pointer",
        }}
      />
    </StyledCarousel>
  )
}

type CarouselProps = {
  items: Array<any>
  slidesPerScroll?: number
  slidesPerPage?: number
  infinite?
  arrows?
}

export default Carousel
