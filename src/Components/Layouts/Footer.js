import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import CssBaseline from "@material-ui/core/CssBaseline"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Fab from "@material-ui/core/Fab"
import MenuIcon from "@material-ui/icons/Menu"
import EditIcon from "@material-ui/icons/Edit"
import LoginButton from "./LoginButton"

const styles = theme => ({
  appBar: {
    top: "auto",
    bottom: 0
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  }
})

function BottomAppBar(props) {
  const { classes } = props
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          <Fab
            color="secondary"
            aria-label="Edit"
            className={classes.fabButton}
          >
            <EditIcon />
          </Fab>
          <div>
            <LoginButton />
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BottomAppBar)
