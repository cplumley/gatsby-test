module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-wpgraphql-inline-images`,
      options: {
        wordPressUrl: `https://admin.dixieply.com/`,
        uploadsUrl: `https://admin.dixieply.com/wp-content/uploads/`,
        processPostTypes: ["Page", "Post"],
        graphqlTypeName: `WordPress`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WordPress`,
        fieldName: `wordpress`,
        url: `https://admin.dixieply.com/graphql`,
        refetchInterval: 30,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`400`, `700`, `900`],
          },
        ],
      },
    },
  ],
}
