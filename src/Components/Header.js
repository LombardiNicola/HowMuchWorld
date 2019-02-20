import React, { useState, Fragment } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ShareIcon from "@material-ui/icons/Share"
import Hamburger from "./Hamburger"

const CustomAppBar = props => {
  const [drawer, setDrawer] = useState(false)

  const handleShare = () => {
    //TODO
  }

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar style={{ paddingLeft: 0, paddingRight: 0 }}>
          <IconButton
            style={{ color: "white", marginLeft: "8px" }}
            onClick={() => setDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            style={{ color: "white", marginLeft: "16px" }}
            variant="h5"
          >
            How much world
          </Typography>
          <div style={{ marginRight: "8px", marginLeft: "auto" }}>
            <IconButton style={{ color: "white" }} onClick={handleShare}>
              <ShareIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Hamburger
        open={drawer}
        close={() => setDrawer(false)}
        swipeAreaWidth={0}
        disableDiscovery={true}
      />
    </Fragment>
  )
}

export default CustomAppBar
