import { useStaticQuery, graphql } from "gatsby"

const WPURLData = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query USE_RELATIVE {
        wordpress {
          generalSettings {
            url
          }
        }
      }
    `
  )
  return wordpress.generalSettings.url
}

const useRelative = url => {
  if (!url) return undefined

  const WPURL = WPURLData().replace("/wp", "")
  let string = url
  if (url.startsWith("/")) return url
  string = string.replace(WPURL, "")
  return string
}

export default useRelative
