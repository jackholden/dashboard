import React from "react";
import ReactDOM from "react-dom";

import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import MantineBase from "./MantineBase";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <MantineBase />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
