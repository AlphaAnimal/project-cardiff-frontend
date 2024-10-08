import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <CssBaseline />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
