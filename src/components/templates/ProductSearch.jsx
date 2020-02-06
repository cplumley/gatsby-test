import React from "react"
import Img from "gatsby-image/withIEPolyfill"

import Base from "./Base"
import Card from "../molecules/Card/Card"
import Content from "../particles/Content"
import styled from "@emotion/styled"
import { randomID } from "../particles/helpers"

const StyledProductCards = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  min-height: calc(100vh - 181px - 218px - 5rem);
  grid-auto-rows: min-content;
`

const Vendors = styled.section`
  margin: 5rem 0;
  grid-column: 1/3;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(4, 1fr);

  a {
    padding: 15px;
    position: relative;
    transition: all 0.2s ease;
  }

  a:hover {
    transform: translateY(-15px);
  }
`

const ProductSearch = ({ pageContext }) => {
  let pageCategories = []
  let pageProducts = []
  let pageVendors = []
  let url = ``

  if (typeof window !== `undefined`) {
    url = window.location.pathname
    const [superCategory, isInterior, subLevel] = url.split("/").slice(2, 5)
    console.log(superCategory)
    console.log(pageContext)

    if (isInterior === "interior" && !subLevel) {
      Object.values(pageContext).map(product => {
        if (product.Residential && product.Residential.isInterior) {
          pageCategories.push(product)
        }
        return null
      })
    } else if (isInterior === "exterior" && !subLevel) {
      Object.values(pageContext).map(product => {
        if (product.Residential && !product.Residential.isInterior) {
          pageProducts.push(product)
        }
        return null
      })
    } else if (subLevel) {
      pageContext.Residential.subLevels.map(subLevel => {
        if (subLevel.productType) {
          subLevel.productType.map(product => {
            pageProducts.push(product)
            return null
          })

          return null
        }
        if (subLevel.vendors) {
          subLevel.vendors.map(vendor => {
            pageVendors.push(vendor)
            return null
          })
        }

        return null
      })
    }
  }

  return (
    <Base>
      <Content>
        {pageContext.title ? <h4>{pageContext.title}</h4> : ``}
        <StyledProductCards>
          {pageCategories.map(category => (
            <Card
              title={category.title}
              link={url + category.uri}
              key={category.uri}
            />
          ))}
          {pageProducts[0] ? (
            <h3 style={{ gridColumn: `1/3` }}>Products</h3>
          ) : (
            undefined
          )}
          {pageProducts.map(product => (
            <Card title={product.name} link={url} key={randomID()} />
          ))}
          <Vendors>
            {pageVendors[0] ? (
              <h3 style={{ gridColumn: `1/5` }}>Vendors</h3>
            ) : (
              undefined
            )}
            {pageVendors.map(vendor => (
              <a href={vendor.VendorInfo.externalUrl} key={randomID()}>
                <Img
                  fluid={vendor.VendorInfo.logo.imageFile.childImageSharp.fluid}
                  style={{ mixBlendMode: "multiply" }}
                  objectFit="contain"
                />
              </a>
            ))}
          </Vendors>
        </StyledProductCards>
      </Content>
    </Base>
  )
}

export default ProductSearch
