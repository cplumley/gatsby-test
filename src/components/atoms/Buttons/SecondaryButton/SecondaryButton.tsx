import React from "react"
import { Link } from "gatsby"
import StyledButton from "./SecondaryButton.style"

const SecondaryButton = (props: ButtonProps) => {
  return (
    <Link to={props.url} css={StyledButton}>
      {props.children}
    </Link>
  )
}

type ButtonProps = {
  children: string
  url: string
  color?: string
  dark?: boolean
}

export default SecondaryButton
