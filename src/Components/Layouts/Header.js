import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

let CustomAppBar = props => (
  <AppBar position="static">
    <Toolbar>
      <IconButton style={{ color: "white" }}>
        <MenuIcon />
      </IconButton>
      <Typography style={{ color: "white", padding: "24px" }} variant="h5">
        World Map
      </Typography>
    </Toolbar>
  </AppBar>
)
export default CustomAppBar
