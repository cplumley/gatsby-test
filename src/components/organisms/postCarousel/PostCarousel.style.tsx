import styled from "@emotion/styled"

const StyledPostCarousel = styled.div`
  background: ${(props: StyledPostCarouselProps) => props.background};
  padding: 5rem 0;

  h3 {
    text-align: center;
    margin-bottom: 3rem;
  }
`

type StyledPostCarouselProps = {
  background: string
}

export default StyledPostCarousel
