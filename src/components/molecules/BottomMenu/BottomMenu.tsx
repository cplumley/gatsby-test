import React from "react"
import StyledBottomMenu from "./BottomMenu.style"
import { usePrimaryMenuData } from "../../particles/hooks/usePrimaryMenuData"
import Menu from "../Menu/Menu"
import { randomID } from "../../particles/helpers"
import Content from "../../particles/Content"

const BottomMenu = () => {
  const primaryMenu = usePrimaryMenuData()

  return (
    <StyledBottomMenu>
      <Content className="content">
        <Menu
          fontColor="#5D412D"
          logo="https://admin.dixieply.com/app/uploads/2020/01/dixieplyLogo.png"
          menuItems={primaryMenu.map(menuItem => ({
            id: menuItem.node.id,
            url: menuItem.node.url,
            label: menuItem.node.label,
            class: menuItem.node.cssClasses,
          }))}
        />
      </Content>
    </StyledBottomMenu>
  )
}

export default BottomMenu
