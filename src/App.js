import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import theme from "./theme/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<h1>Not Found 404!</h1>} />
        </Routes>
      </BrowserRouter>
      {/* {url === "http://localhost:3000/" ? <Home></Home> : <SignIn></SignIn>} */}
      {/* Se url for igual a localhost, ele irá carregar a home, se não, irá carregar página de login */}
    </ThemeProvider>
  );
}

export default App;
