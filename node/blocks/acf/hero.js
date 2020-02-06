const mediaFields = require(`../../fragments/media`)

const heroBlock = `
  ... on WordPress_AcfHeroBlock {
    heroFields: acf {
      hero_CTA
      hero_background_overlay
      hero_background_image {
        ${mediaFields}
      }
      hero_cta_buttons {
        btn_class
        link {
          title
          url
          target
        }
      }
    }
  }
`

module.exports = heroBlock
