import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RenderWrapper } from "./components/RenderWrapper";
import { Root } from "./layout/Root";
import { queryClient } from "./utils/queryClient";

const rootElement = document.getElementById("root");

queryClient.prefetchQuery({ queryKey: ["bib"] });

createRoot(rootElement).render(
  <StrictMode>
    <RenderWrapper>
      <Root />
    </RenderWrapper>
  </StrictMode>,
);
