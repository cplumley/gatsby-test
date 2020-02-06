import { useStaticQuery, graphql } from "gatsby"

export const HeaderOptions = () => {
  const { wordpress } = useStaticQuery(graphql`
    query MyQuery {
      wordpress {
        headerOptions {
          headerOptions {
            topNavBar {
              breakpoints {
                desktop
                mobile
                retina
                tablet
              }
              colors {
                background {
                  backgroundColor
                  backgroundOpacity
                }
                linkColors {
                  color
                  hover
                }
              }
              padding {
                bottom
                left
                right
                top
              }
            }
          }
        }
      }
    }
  `)

  return wordpress.headerOptions.headerOptions
}
