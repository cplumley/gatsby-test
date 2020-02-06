import React from "react"
import StyledBreadcrumbs from "./Breadcrumbs.style"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Content = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ececef;
  height: 100%;
`

const Breadcrumbs = (props: BreadcrumbProps) => {
  return (
    <StyledBreadcrumbs>
      <Content>
        {props.path.map((breadcrumb, idx) => (
          <>
            {idx !== 0 ? " > " : ""}
            <Link to={breadcrumb[1]}>{breadcrumb[0]}</Link>
          </>
        ))}
      </Content>
    </StyledBreadcrumbs>
  )
}

type BreadcrumbProps = {
  path: Array<string>
}

export default Breadcrumbs
