const vendors = require(`./fragments/vendors`)
const path = require(`path`)

module.exports = async ({ actions, graphql }, pluginOptions) => {
  const GET_COMMERCIAL = `
  query GET_COMMERCIAL($first:Int){
    wordpress {
      commercialCategories(first: $first) {
        nodes {
          status
          title
          uri
          Commercial {
            subLevelsSubLevels {
              subLevelType
              categoryName
              categorySubLevel {
                products {
                  name
                }
              }
              productType {
                name
              }
              ${vendors}
            }
          }
        }
      }
    }
  }
  `
  const { createPage } = actions

  const fetchProducts = async variables =>
    await graphql(GET_COMMERCIAL, variables).then(({ data }) => {
      return data.wordpress.commercialCategories.nodes
    })

  await fetchProducts({ first: 500 }).then(allProducts => {
    allProducts.map(product => {
      const categoryUri = `/products/commercial/${product.uri}`

      console.log(`create product page: ${categoryUri}`)
      actions.createPage({
        path: categoryUri,
        component: path.resolve(`./src/components/templates/ProductSearch.jsx`),
        context: {
          pluginOptions,
          ...product,
          id: product.id,
          slug: product.uri,
          title: product.title,
        },
      })
    })
  })
}
