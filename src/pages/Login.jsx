import { useState } from "react"
import { useAuth } from "../context/AuthContext"

export default function Login() {
  const { login } = useAuth()

  const [email, setEmail] = useState("")
  const [role, setRole] = useState("student")

  const handleSubmit = e => {
    e.preventDefault()
    login(email, role)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <select
          className="w-full border p-2 mb-3"
          value={role}
          onChange={e => setRole(e.target.value)}
        >
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  )
}