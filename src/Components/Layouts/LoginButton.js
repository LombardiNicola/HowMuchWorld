import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const styles = {}

function LoginButton(props) {
  const { classes } = props
  return (
    <Button variant="outlined" color="inherit">
      Login
    </Button>
  )
}

LoginButton.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LoginButton)
