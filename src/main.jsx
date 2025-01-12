import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { IndexProvider } from "./context/IndexContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <IndexProvider>
      <App />
    </IndexProvider>
  </StrictMode>
);
