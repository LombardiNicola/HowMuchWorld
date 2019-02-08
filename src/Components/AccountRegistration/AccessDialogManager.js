import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
//import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

export default class FormDialog extends React.Component {
  state = {
    open: false,
    isLogin: true
  }

  handleClickOpen = () => {
    this.setState({ open: true })
    this.setState({ isLogin: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleActive = Transition => {
    this.setState({ open: false })
    /*TODO */
    console.log(document.getElementById("changeButtonDialog").innerText)
  }

  handleChange = () => {
    this.setState({ isLogin: !this.state.isLogin })
  }

  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="inherit"
          onClick={this.handleClickOpen}
        >
          Sign In
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            {this.state.isLogin ? "Sign In" : "Sign Up"}
          </DialogTitle>
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
            {!this.state.isLogin && (
              <TextField
                margin="dense"
                id="confirmPassword"
                label="Confirm Your Password"
                type="password"
                fullWidth
              />
            )}
          </DialogContent>
          <DialogActions>
            <Button
              id="cancelButtonDialog"
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
              {this.state.isLogin ? "Sign In" : "Sign Up"}
            </Button>
            <Button
              id="changeButtonDialog"
              onClick={this.handleChange}
              variant="outlined"
              color="secondary"
            >
              {!this.state.isLogin ? "Sign In" : "Sign Up"}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
