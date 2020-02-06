import React from "react"
import Base from "./Base"
import ComponentParser from "../particles/ComponentParser"

const Page = ({ pageContext }) => {
  return (
    <Base context={pageContext}>
      <ComponentParser content={pageContext.blocks} />
    </Base>
  )
}

export default Page
