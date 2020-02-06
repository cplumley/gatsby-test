import React, { useState } from "react"

import Card from "../../molecules/Card/Card"
import { useResidentialData } from "../../particles/hooks/useResidentialData"
import { randomID } from "../../particles/helpers"

const ShowOptions = props => {
  const [SuperCategory, setSuperCategory] = useState(
    props.superCategory ? props.superCategory : null
  )

  const [SubCategory, setSubCategory] = useState(null)

  const updateSubCategory = data => {
    setSubCategory({
      title: data.title,
      data: data.Residential.subLevels,
    })
  }

  const updateSuperCategory = category => {
    props.setBreadcrumbs(["Home", category])
    setSuperCategory(category)
  }

  const ResidentialData = useResidentialData()

  console.log(ResidentialData)

  if (
    SuperCategory &&
    SuperCategory.toUpperCase() === "RESIDENTIAL" &&
    !SubCategory
  ) {
    return (
      <>
        {ResidentialData.map(subCategory => (
          <Card
            key={subCategory.node.id}
            onClick={() => {
              updateSubCategory(subCategory.node)
            }}
            title={subCategory.node.title}
          />
        ))}
      </>
    )
  } else if (SubCategory && SubCategory.title) {
    return (
      <>
        {SubCategory.data.map(data =>
          data.vendors.map(vendor => (
            <Card key={vendor.id} title={vendor.title} />
          ))
        )}
      </>
    )
  } else {
    return (
      <>
        <Card
          key={randomID()}
          onClick={() => {
            updateSuperCategory("Residential")
          }}
          title="Residential"
        />
        <Card
          onClick={() => {
            updateSuperCategory("Commercial")
          }}
          title="Commercial"
        />
      </>
    )
  }
}

export default ShowOptions
