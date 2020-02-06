import React from "react"
import StyledMenu from "./Menu.style"
import { Link } from "gatsby"
import Logo from "../../atoms/Logo/Logo"
import { randomID } from "../../particles/helpers"
import useRelative from "../../particles/hooks/useRelative"

const Menu = (props: MenuProps) => {
  return (
    <StyledMenu fontColor={props.fontColor}>
      {props.menuItems.map((menuItem, idx) => (
        <Link
          to={useRelative(menuItem.url)}
          key={randomID()}
          style={{ order: idx }}
        >
          <li key={randomID()}>{menuItem.label}</li>
        </Link>
      ))}
      {props.logo ? (
        <Link
          to="/"
          className="no-line"
          key={randomID()}
          style={{ order: props.menuItems.length / 2 - 1 }}
        >
          <Logo height={100} maxWidth={150} />
        </Link>
      ) : (
        ``
      )}
    </StyledMenu>
  )
}

type menuItems = {
  id: string
  url: string
  label: string
  class: Array<string>
}

type MenuProps = {
  fontColor: string
  menuItems: Array<menuItems>
  vertical?: Boolean
  logo?: any
}

export default Menu
