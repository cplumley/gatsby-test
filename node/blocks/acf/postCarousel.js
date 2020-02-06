const postCarouselBlock = `
  ... on WordPress_AcfPostCarouselBlock {
    postCarouselFields: acf {
      title
      cpt_all
      background_color
    }
  }
`

module.exports = postCarouselBlock
