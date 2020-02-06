import React, { useState } from "react"
import StyledSelect from "./Select.style"

const Select = (props: SelectProps) => {
  const [isOpen, setOpen] = useState(false)

  const updateMenu = e => {
    e.preventDefault
    setOpen(!isOpen)
  }
  if (props.sort) {
    props.options.sort(function(a, b) {
      if (a.label > b.label) {
        return 1
      }
      if (b.label > a.label) {
        return -1
      }
      return 0
    })
  }

  return (
    <StyledSelect
      background={props.background}
      width={props.width}
      className={isOpen ? "open" : ""}
      onClick={updateMenu}
    >
      {props.value}
      <ul>
        {props.options.map(option => (
          <li
            value={option.value}
            key={option.value}
            onClick={() => {
              props.updateState({ type: "UPDATE_BRANCH", branch: option.value })
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </StyledSelect>
  )
}

type Options = {
  label: string
  value: string
}

type SelectProps = {
  options: Array<Options>
  value: string
  width: number
  updateState: any
  sort?
  background: {
    backgroundColor: string
    backgroundOpacity: number
  }
}

export default Select
