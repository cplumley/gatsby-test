import React from "react"
import { isEmptyObject, randomID } from "./helpers"

import Hero from "../organisms/hero/Hero"
import Row from "../organisms/row/Row"
import RowImage from "../organisms/rowImage/RowImage"
import PostCarousel from "../organisms/postCarousel/PostCarousel"

const components = {
  hero: Hero,
  row: Row,
  "row-w--image": RowImage,
  "post-carousel": PostCarousel,
}

const convertACFProps = component => {
  // get all object keys and iterate over them
  Object.keys(component).forEach(key => {
    if (key.includes("Fields")) {
      component.data = component[key]
      delete component[key]
    }
  })

  return component
}

const sanatizeName = name => {
  if (!name) return null
  let newName = name
  newName = newName.replace("core-embed/", "")
  newName = newName.replace("acf/", "")
  return newName
}

const ComponentParser = props => {
  let { content } = props

  if (!content) return null
  const filteredComponents = content.filter(
    component =>
      !component || !isEmptyObject(component) || component.name !== null
  )

  if (filteredComponents && filteredComponents.length > 0) {
    const pageComponents = filteredComponents.map((component, index) => {
      const componentName = sanatizeName(component.name)
      const Component = components[componentName]

      if (!Component) return null

      component = convertACFProps(component)

      return (
        <Component
          index={index}
          key={`component-${randomID()}`}
          {...component}
          {...component.data}
          {...component.attributes}
        />
      )
    })

    if (pageComponents) {
      return pageComponents
    }
  }
  return null
}

export default ComponentParser
