import React, { useContext } from "react"
import Menu from "../../molecules/Menu/Menu"
import BranchSelection from "../../molecules/BranchSelection/BranchSelection"
import StyledTopMenu from "./TopMenu.style"

import { useTopMenuData } from "../../particles/hooks/useTopMenuData"
import { GlobalStateContext } from "../../../context/GlobalContextProvider"
import { randomID } from "../../particles/helpers"
import Content from "../../particles/Content"

const TopMenu = (props: TopMenuProps) => {
  const topMenu = useTopMenuData()
  const state: { branch: string } = useContext(GlobalStateContext)

  return (
    <StyledTopMenu
      padding={props.navOptions.padding}
      background={props.navOptions.colors.background}
    >
      <Content className="content">
        <BranchSelection
          background={props.navOptions.colors.background}
          state={state}
        />
        <Menu
          fontColor="#fff"
          menuItems={topMenu.map(menuItem => ({
            id: menuItem.node.id,
            url: menuItem.node.url,
            label: menuItem.node.label,
            class: menuItem.node.cssClasses,
          }))}
        />
      </Content>
    </StyledTopMenu>
  )
}

type TopMenuProps = {
  navOptions: any
}

export default TopMenu
