const mediaFields = require(`../../fragments/media`)

const rowBlock = `
   ... on WordPress_AcfRowBlock {
    rowFields: acf {
      row_title
      row_text
      btn_class
      link {
        target
        url
      }
      row_move_text_to_right_column
      row_gradient_direction
      row_text_align
      row_gradient_starting_color
      row_gradient_end_color
      row_gradient
      row_dark_background
      row_background_overlay_color
      row_background_image {
        ${mediaFields}
      }
    }
  }
`

module.exports = rowBlock
