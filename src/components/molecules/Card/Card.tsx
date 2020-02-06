import React from "react"
import StyledCard from "./Card.style"
import { Link } from "gatsby"

const Card = (props: CardProps) => {
  return (
    <Link to={props.link}>
      <StyledCard>
        <h4>{props.title}</h4>
      </StyledCard>
    </Link>
  )
}

type CardProps = {
  title: string
  link: string
}

export default Card
