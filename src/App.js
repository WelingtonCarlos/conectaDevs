import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import authService from "./services/authServices";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import theme from "./theme/index";

import "./mock";

function App() {
  const isAuthenticated = authService.isAuthenticated();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signin"
            element={isAuthenticated ? <Home /> : <SignIn />}
          />
          <Route path="*" element={<h1>Not Found 404!</h1>} />
        </Routes>
      </BrowserRouter>
      {/* {url === "http://localhost:3000/" ? <Home></Home> : <SignIn></SignIn>} */}
      {/* Se url for igual a localhost, ele irá carregar a home, se não, irá carregar página de login */}
    </ThemeProvider>
  );
}

export default App;
