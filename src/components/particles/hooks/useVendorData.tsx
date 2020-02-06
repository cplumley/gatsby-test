import { useStaticQuery, graphql } from "gatsby"

export const useVendorData = () => {
  const { wordpress } = useStaticQuery(graphql`
    query getVendors {
      wordpress {
        vendors(first: 500) {
          edges {
            node {
              id
              VendorInfo {
                externalUrl
                logo {
                  altText
                  uri
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid {
                        aspectRatio
                        base64
                        sizes
                        src
                        srcSet
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return wordpress.vendors.edges
}
