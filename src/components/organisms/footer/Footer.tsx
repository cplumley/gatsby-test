import React from "react"

import Content from "../../particles/Content"
import StyledFooter from "./Footer.style"

/**
 * TODO:
 *  - Create Theme Options in Wordpress for Footer
 *  - Break Components into Organisms and Atoms
 *  - Create Newsletter function using Gravity Forms
 *  */

const Footer = () => {
  return (
    <StyledFooter>
      <Content>
        <p style={{ fontSize: "2rem", textTransform: "uppercase" }}>
          &copy; {new Date().getFullYear()} Dixie Plywood and Lumber Company /
          All Rights Reserved
          <br />
          Website provided by{" "}
          <a
            href="https://buildingonline.com"
            target="_blank"
            style={{ color: "white" }}
          >
            BuildingOnline
          </a>
        </p>
      </Content>
    </StyledFooter>
  )
}

export default Footer
