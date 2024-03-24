import Typography from "@mui/material/Typography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import'./App.css'
import Proudact from "./components/proudact/Proudact";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
   
<Header1/>
<Header2/>
<Header3/>
<Proudact/>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;