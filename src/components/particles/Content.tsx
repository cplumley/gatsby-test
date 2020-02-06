import React from "react"
import styled from "@emotion/styled"

const StyledContent = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${(props: StyledProps) => props.maxWidth || `1250px`};

  @media (max-width: 1250px) {
    padding: 0 4rem;
  }
`

const Content = (props: ContentProps) => {
  return (
    <StyledContent
      maxWidth={props.maxWidth || undefined}
      className={props.className}
    >
      {props.children}
    </StyledContent>
  )
}

type ContentProps = {
  children: any
  maxWidth?: string
  className?: string
}

type StyledProps = {
  maxWidth?: string
}

export default Content
