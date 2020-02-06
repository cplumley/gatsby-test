import { useStaticQuery, graphql } from "gatsby"

export const useResidentialData = () => {
  const { wordpress } = useStaticQuery(graphql`
    query ResidentialData {
      wordpress {
        residentialCategories {
          edges {
            node {
              id
              title
              Residential {
                isInterior
                subLevels {
                  categoryName
                  productType {
                    name
                  }
                  vendors {
                    ... on WordPress_Vendor {
                      id
                      title
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

  return wordpress.residentialCategories.edges
}
