const path = require(`path`)

module.exports = async ({ actions, graphql }, pluginOptions) => {
  const GET_POSTS = `
  query GET_POSTS($first:Int){
    wordpress {
      posts( first: $first ) {
				nodes {
					status
					uri
          title
          content
				}
      }
    }
  }
  `
  const { createPage } = actions

  const fetchPosts = async variables =>
    await graphql(GET_POSTS, variables).then(({ data }) => {
      return data.wordpress.posts.nodes
    })

  await fetchPosts({ first: 500 }).then(allPosts => {
    allPosts.map(post => {
      console.log(`create post: ${post.uri}`)
      actions.createPage({
        path: `/${post.uri}`,
        component: path.resolve(`./src/components/templates/post/Post.jsx`),
        context: {
          pluginOptions,
          ...post,
          id: post.id,
          slug: post.uri,
          title: post.title,
        },
      })
    })
  })
}
