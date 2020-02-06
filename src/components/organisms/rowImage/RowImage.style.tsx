import styled from "@emotion/styled"

const StyledRowImage = styled.div`
  padding: 5rem 0;

  & > div {
    display: flex;
    flex-direction: ${(props: StyledRowImageProps) =>
      props.imagePlacement ? `row-reverse` : `row`};
  }

  section {
    flex: 1;
    padding: 2.5rem;
    p {
      padding: 1rem 0;
    }
  }
`

type StyledRowImageProps = {
  imagePlacement: boolean
}

export default StyledRowImage
