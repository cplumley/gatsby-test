const mediaFields = require(`./media`)

const vendors = `
  vendors {
    ... on WordPress_Vendor {
      id
      title
      VendorInfo {
        externalUrl
        logo {
          sourceUrl
          ${mediaFields}
        }
      }
    }
  }
`

module.exports = vendors
