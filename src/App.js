import React from "react"
import Main from "./Main"
import "./App.css"
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery"
const App = () => {
  const isMobile = useMediaQuery("(min-width:600px)")
  return (
    <MuiThemeProvider
      theme={createMuiTheme({ palette: { primary: { main: "#5616e0" } } })}
    >
      <Main isMobile={isMobile} />
    </MuiThemeProvider>
  )
}

export default App
