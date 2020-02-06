import React from "react"
import Layout from "../../../components/layout"
import styled from "@emotion/styled"
import Card from "../../../components/molecules/Card/Card"
import Content from "../../../components/particles/Content"

const StyledProductCards = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  min-height: calc(100vh - 181px - 218px - 5rem);
`

const index = () => {
  return (
    <Layout>
      <Content>
        <StyledProductCards>
          <Card title="Interior" link="/products/residential/interior/" />
          <Card title="Exterior" link="/products/residential/exterior/" />
        </StyledProductCards>
      </Content>
    </Layout>
  )
}

export default index
