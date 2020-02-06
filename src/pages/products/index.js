import React from "react"
import Layout from "../../components/layout"
import Content from "../../components/particles/Content"
import styled from "@emotion/styled"
import Card from "../../components/molecules/Card/Card"

const StyledProductCards = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  min-height: calc(100vh - 181px - 218px - 5rem);
`

const index = () => {
  return (
    <Layout>
      <Content>
        <StyledProductCards>
          <Card title="Residential" link="/products/residential/" />
          <Card title="Commercial" link="/products/residential/" />
          <Card
            title="Specialty Commercial"
            link="/products/specialty-commercial/"
          />
        </StyledProductCards>
      </Content>
    </Layout>
  )
}

export default index
