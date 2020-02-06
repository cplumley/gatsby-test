import { useStaticQuery, graphql } from "gatsby"

export const useTopMenuData = () => {
  const { wordpress } = useStaticQuery(graphql`
    query getTopMenu {
      wordpress {
        menu(id: "TWVudToy") {
          menuItems {
            edges {
              node {
                id
                label
                url
                cssClasses
              }
            }
          }
        }
      }
    }
  `)

  return wordpress.menu.menuItems.edges
}
