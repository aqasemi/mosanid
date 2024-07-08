import { useState } from "react";
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import FAQ from "./scenes/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import COURSES from "./scenes/courses";
import { chapters, sessions } from "./data/mockData";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const ins = "Hii";

  const AppLayout = () => {
    return (
      <div className="app">
        <Sidebar instructor_name={ins} />
        <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
        </main>
      </div>
    );
  } 

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<AppLayout/>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/test" element={<Dashboard />} /> 
          <Route path="/auth/launch" element={<Dashboard />} />
          <Route path="/api/launch" element={<Dashboard />} />
          <Route path="/courses" element={<COURSES />} 
            loader={() => <COURSES chapters={chapters} sessions={sessions} />}  
          />
          <Route path="/faq" element={<FAQ />} />
      </Route>
    )
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router}/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
