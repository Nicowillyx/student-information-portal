import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

import { AuthProvider } from "./context/AuthContext"
import { AnnouncementProvider } from "./context/AnnouncementContext"
import { ThemeProvider } from "./context/ThemeContext"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <AnnouncementProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </AnnouncementProvider>
    </AuthProvider>
  </StrictMode>
)