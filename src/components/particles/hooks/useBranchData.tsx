import { useStaticQuery, graphql } from "gatsby"

export const useBranchData = () => {
  const { wordpress } = useStaticQuery(graphql`
    query getBranches {
      wordpress {
        branches {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    }
  `)

  return wordpress.branches.edges
}
