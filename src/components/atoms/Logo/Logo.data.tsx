import { useStaticQuery, graphql } from "gatsby"

export const useLogo = () => {
  const { wordpress } = useStaticQuery(graphql`
    query getLogo {
      wordpress {
        themeOptions {
          generalSettings {
            logos {
              primaryLogo {
                sourceUrl
                imageFile {
                  childImageSharp {
                    fixed {
                      ...GatsbyImageSharpFixed
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

  return wordpress.themeOptions.generalSettings.logos.primaryLogo.imageFile
    .childImageSharp.fixed
}
