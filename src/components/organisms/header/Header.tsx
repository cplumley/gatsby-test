import React from "react"

import { HeaderOptions } from "./HeaderOptionData"
import TopMenu from "../../molecules/TopMenu/TopMenu"
import BottomMenu from "../../molecules/BottomMenu/BottomMenu"

const Header = () => {
  const { topNavBar } = HeaderOptions()

  return (
    <header>
      <TopMenu navOptions={topNavBar} />
      <BottomMenu />
    </header>
  )
}

export default Header
