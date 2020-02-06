const vendors = require(`./fragments/vendors`)
const path = require(`path`)

module.exports = async ({ actions, graphql }, pluginOptions) => {
  const GET_RESIDENTIAL = `
  query GET_RESIDENTIAL($first:Int){
    wordpress {
      residentialCategories(first: $first) {
        nodes {
          status
          title
          uri
          Residential {
            isInterior
            subLevels {
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
    await graphql(GET_RESIDENTIAL, variables).then(({ data }) => {
      return data.wordpress.residentialCategories.nodes
    })

  await fetchProducts({ first: 500 }).then(allProducts => {
    actions.createPage({
      path: `/products/residential/interior`,
      component: path.resolve(`./src/components/templates/ProductSearch.jsx`),
      context: {
        pluginOptions,
        ...allProducts,
      },
    })

    actions.createPage({
      path: `/products/residential/exterior`,
      component: path.resolve(`./src/components/templates/ProductSearch.jsx`),
      context: {
        pluginOptions,
        ...allProducts,
      },
    })

    allProducts.map(product => {
      const categoryUri = `/products/residential/${
        product.Residential.isInterior ? `interior` : `exterior`
      }/${product.uri}`

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

      product.Residential.subLevels.map(subLevel => {
        if (subLevel.subLevelType === "Category") {
          const productUri = `${categoryUri}/${subLevel.categoryName}`

          console.log(`create product page: ${productUri}`)

          actions.createPage({
            path: productUri,
            component: path.resolve(
              `./src/components/templates/ProductSearch.jsx`
            ),
            context: {
              pluginOptions,
              ...product,
              id: product.id,
              slug: product.uri,
              title: product.title,
            },
          })
        }
      })
    })
  })
}
