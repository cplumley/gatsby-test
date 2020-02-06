const path = require(`path`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const blocks = require("./blocks/all")

module.exports = async ({ actions, graphql }, pluginOptions) => {
  const GET_PAGES = `
    query GET_PAGES($first: Int) {
      wordpress {
        pages(first: $first) {
          nodes {
            title
            uri
            isFrontPage
            content
            blocks {
              isValid
              name
              ${blocks.hero}
              ${blocks.row}
              ${blocks.rowImage}
              ${blocks.postCarousel}
            }
          }
        }
      }
    }
  `
  const { createPage } = actions

  const fetchPages = async variables =>
    await graphql(GET_PAGES, variables).then(({ data }) => {
      return data.wordpress.pages.nodes
    })

  await fetchPages({ first: 500 }).then(allPages => {
    allPages.map(page => {
      console.log(`create page: ${page.uri}`)

      const { isFrontPage } = page
      const uri = isFrontPage ? `/` : `/${page.uri}`

      actions.createPage({
        path: uri,
        component: path.resolve(`./src/components/templates/Page.jsx`),
        context: {
          pluginOptions,
          ...page,
          title: page.title,
        },
      })
    })
  })
}

// This allows us to import media files from wordpress during build
// We can use Gatsby's Img component to optimize the image
// For more info: https://dev.to/nevernull/gatsby-with-wpgraphql-acf-and-gatbsy-image-72m

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions
  createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.sourceUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
