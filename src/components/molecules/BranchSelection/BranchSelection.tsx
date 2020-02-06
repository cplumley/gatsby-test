import React, { useContext } from "react"
import Select from "../../atoms/Select/Select"
import { useBranchData } from "../../particles/hooks/useBranchData"
import { GoLocation } from "react-icons/go"
import StyledSelection from "./StyledSelection"

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../../context/GlobalContextProvider"

const BranchSelection = (props: BranchProps) => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  const branches = () => {
    let branches = useBranchData()
    let options = branches.map(branch => ({
      label: branch.node.title,
      value: branch.node.title,
    }))

    options.unshift({ value: "All Branches", label: "All Branches" })

    return options
  }

  return (
    <StyledSelection>
      <Select
        options={branches()}
        value={state ? state.branch : "All Branches"}
        updateState={dispatch}
        width={150}
        background={props.background}
        sort
      />
    </StyledSelection>
  )
}

type BranchProps = {
  state: {
    branch: string
  }
  background: {
    backgroundColor: string
    backgroundOpacity: number
  }
}

export default BranchSelection
