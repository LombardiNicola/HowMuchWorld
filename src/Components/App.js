import React, { Component } from "react"
import Main from "./Main"
import MainMobile from "./MainMobile"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = { isOpen: false }
  }

  render() {
    return window.innerWidth > 500 ? <Main /> : <MainMobile />
  }
}
