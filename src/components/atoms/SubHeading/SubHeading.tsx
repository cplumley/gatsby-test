import React from "react"
import StyledSubHeading from "./SubHeading.style"

const SubHeading = (props: SubHeadingProps) => {
  return (
    <StyledSubHeading
      center={props.center || undefined}
      dark={props.dark || undefined}
    >
      {props.title}
    </StyledSubHeading>
  )
}

type SubHeadingProps = {
  title: string
  center?: boolean
  dark?: boolean
}

export default SubHeading
