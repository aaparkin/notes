import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { NotesPage } from "./pages/notes";
import { SignPage } from "./pages/sign";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const RoutingProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route path="/sign" element={<SignPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <RoutingProvider></RoutingProvider>
    </ThemeProvider>
  );
};
