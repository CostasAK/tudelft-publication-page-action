import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RenderWrapper } from "./components/RenderWrapper";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <StrictMode>
    <RenderWrapper>
      <Header />
      <Main />
      <Footer />
    </RenderWrapper>
  </StrictMode>,
);
