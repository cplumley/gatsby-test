const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

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
    WordPress_MediaItem: {
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

const createPages = require(`./node/createPages`)
const createResidential = require(`./node/createResidential`)
const createCommercial = require(`./node/createCommercial`)

exports.createPages = async ({ actions, graphql }) => {
  const pluginOptions = {
    wordPressUrl: `https://admin.dixieply.com/`,
    uploadsUrl: `https://admin.dixieply.com/wp-content/uploads/`,
  }

  await createPages({ actions, graphql }, pluginOptions)
  await createResidential({ actions, graphql }, pluginOptions)
  await createCommercial({ actions, graphql }, pluginOptions)
}
