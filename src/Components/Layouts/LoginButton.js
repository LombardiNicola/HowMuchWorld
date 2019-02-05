import React, { Component } from "react"
import Button from "@material-ui/core/Button"
//import LoginDialog from "./LoginDialog"

export default class LoginButton extends Component {
  handleClick = () => {
    console.log("login function")
  }

  render() {
    return (
      <Button onClick={this.handleClick()} variant="outlined" color="inherit">
        Login
      </Button>
    )
  }
}
