import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider.jsx";
import LoginContextProvider from "./context/LoginContextProvider.jsx";
import SignupContextProvider from "./context/SignupContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <LoginContextProvider>
          <SignupContextProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
        </SignupContextProvider>
        </LoginContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
