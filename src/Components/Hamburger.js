import React from "react"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"

const Hamburger = props => (
  <SwipeableDrawer onOpen={() => {}} open={props.open} onClose={props.close}>
    <div
      style={{
        maxWidth: "360px",
        width: "80vw",
        backgroundColor: "#e0e0e0",
        height: "100%"
      }}
    >
      <Avatar
        style={{
          marginTop: "64px",
          marginLeft: "64px",
          marginRight: "64px",
          maxWidth: "232px",
          width: "calc(100% - 128px)",
          maxHeight: "232px",
          height: "calc(80vw - 128px)",
          backgroundColor: "#ff0000"
        }}
      >
        <Typography style={{ color: "white" }} variant="h1">
          NL
        </Typography>
      </Avatar>
    </div>
  </SwipeableDrawer>
)

export default Hamburger
