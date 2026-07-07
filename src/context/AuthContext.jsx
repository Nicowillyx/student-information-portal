import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user")
    return saved ? JSON.parse(saved) : null
  })

  const login = (email, role) => {
    const finalRole = email === "admin@portal.com" ? "admin" : (role || "student")

    const userData = {
      email,
      role: finalRole,
      name: "Abiodun Ajibola Williams",
      matric: "2024/00001",
      department: "Computer Science",
      level: "200",
      session: "2025 / 2026",
    }

    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}