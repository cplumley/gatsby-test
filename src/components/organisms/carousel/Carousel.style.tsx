import styled from "@emotion/styled"

const StyledCarousel = styled.div`
  position: relative;

  section {
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    position: relative;

    a {
      max-height: 120px;
      flex: 1 0 22%;
      margin: 0 2rem;
      position: relative;
      left: 0;
      transition: all 0.3s ease;

      img {
        max-height: 120px;
      }
    }

    align-items: center;
  }
`

export default StyledCarousel
