import React from "react"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"

const Hamburger = props => (
  <SwipeableDrawer onOpen={() => {}} open={props.open} onClose={props.close}>
    <div style={{ maxWidth: "360px", minWidth: "360px" }}>a</div>
  </SwipeableDrawer>
)

export default Hamburger
