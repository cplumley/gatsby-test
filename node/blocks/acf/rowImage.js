const mediaFields = require(`../../fragments/media`)

const rowImageBlock = `
   ... on WordPress_AcfRowWImageBlock {
    parentId
    rowImageFields: acf {
      row__image_title
      image_placement
      row_image_dark
      row_image_text
      row_text_align
      btn_class
      link {
        target
        url
      }
      row_image_field {
        ${mediaFields}
      }
    }
  }
`

module.exports = rowImageBlock
