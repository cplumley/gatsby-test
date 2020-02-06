import React from "react"
import { Link } from "gatsby"
import StyledButton from "./PrimaryButton.style"

const PrimaryButton = (props: ButtonProps) => {
  return (
    <Link to={props.url} css={StyledButton}>
      {props.children}
    </Link>
  )
}

type ButtonProps = {
  children: string
  url: string
  dark?: boolean
}

export default PrimaryButton
