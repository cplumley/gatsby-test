import { useStaticQuery, graphql } from "gatsby"

export const usePrimaryMenuData = () => {
  const { wordpress } = useStaticQuery(graphql`
    query getPrimaryMenu {
      wordpress {
        menu(id: "TWVudToz") {
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
