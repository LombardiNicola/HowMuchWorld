import React, { Component } from "react"
import Main from "./Main"
import MainMobile from "./MainMobile"

export default class App extends Component {
  render() {
    return window.innerWidth > 500 ? <Main /> : <MainMobile />
  }
}
