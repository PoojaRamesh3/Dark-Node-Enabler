import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/color-mode";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript intialColorMode={theme.config.intialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
