const fluidImageFields = require(`./gatsby/fluid`)

const mediaFields = `
	altText
  uri
  sourceUrl
  ${fluidImageFields}
`

module.exports = mediaFields
