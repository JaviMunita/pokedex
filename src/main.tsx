import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PokemonProvider } from "./context/PokemonContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </StrictMode>
);
