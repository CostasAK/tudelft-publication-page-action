import "./index.css";

import { Root } from "./layout/Root";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("body");

createRoot(rootElement).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
