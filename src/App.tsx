import { CssBaseline } from '@mui/material'
import MyThemeProvider from './Theme'
import UI from './components/UI'

function App() {
  return (
    <MyThemeProvider>
      <CssBaseline>
        <UI />
      </CssBaseline>
    </MyThemeProvider>
  )
}

export default App
