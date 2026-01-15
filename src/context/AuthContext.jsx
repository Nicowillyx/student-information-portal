import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = (email) => {
    const role = email === "admin@portal.com" ? "admin" : "student"
    
    setUser({
      email,
      role,

      // 🔒 Static academic info (from signup)
      name: "Abiodun Ajibola Williams",
      matric: "2024/00001",
      department: "Computer Science",
      level: "200",
      session: "2025 / 2026",
    })
  }

  const logout = () => {
    setUser(null)
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