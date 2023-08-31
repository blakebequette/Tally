import { ThemeProvider, createTheme } from '@mui/material/styles'
import { green, purple } from '@mui/material/colors'
import { ReactNode } from 'react'

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto,Arial',
    fontSize: 20,
  },
  spacing: 4,
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    // success: {
    //   main: brown[500],
    // },
    // warning: {
    //   main: red[500],
    // },
    // info: {
    //   main: blue[500],
    // },
    // background: {
    //   default: grey[900],
    // },
    mode: 'light',
  },
})

export default function MyThemeProvider(props: { children?: ReactNode }) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}
