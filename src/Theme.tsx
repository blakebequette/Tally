import { ThemeProvider, createTheme } from "@mui/material/styles"
import { green, purple } from "@mui/material/colors"
import { ReactNode } from "react"

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    background: {
      default: green[200],
    },
    mode: "dark",
  },
})

export default function MyThemeProvider(props: { children?: ReactNode }) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}
