import { useState } from 'react'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from './theme';
import './App.css'
import Header1 from './components/header/Header1'
import Header2 from './components/header/Header2'
import Header3 from './components/header/Header3'

function App() {

  const [theme, colorMode] = useMode();
  return (
  
    <ColorModeContext.Provider value={colorMode}>

   <ThemeProvider theme={theme}><
      <CssBaseline />
    
      <Header1/>
<Header2/>
<Header3/>

    
    /ThemeProvider>





</ThemeProvider>
    </ColorModeContext.Provider>


  )
}
    
export default App
