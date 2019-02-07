import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
//import DialogContentText from "@material-ui/core/DialogContentText"
//import DialogTitle from "@material-ui/core/DialogTitle"

export default class FormDialog extends React.Component {
  state = {
    open: false
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleActive = () => {
    this.setState({ open: false })
    /*TODO */
    console.log(document.getElementById("changeButtonDialog").innerText)
  }

  handleChange = () => {
    let temp = document.getElementById("changeButtonDialog").innerText
    document.getElementById(
      "changeButtonDialog"
    ).innerText = document.getElementById("activeButtonDialog").innerText
    document.getElementById("activeButtonDialog").innerText = temp
  }

  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="inherit"
          onClick={this.handleClickOpen}
        >
          Login
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          {/*<DialogTitle id="form-dialog-title">Login</DialogTitle>*/}
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
            />
            <TextField
              margin="dense"
              id="confirmPassword"
              label="Confirm Your Password"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
              id="cancelDialog"
              onClick={this.handleClose}
              color="primary"
            >
              Cancel
            </Button>
            <Button
              id="activeButtonDialog"
              onClick={this.handleActive}
              color="primary"
            >
              Login
            </Button>
            <Button
              id="changeButtonDialog"
              onClick={this.handleChange}
              variant="outlined"
              color="secondary"
            >
              Sign up
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
