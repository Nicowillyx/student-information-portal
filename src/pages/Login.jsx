import { useState } from "react"
import { useAuth } from "../context/AuthContext"

// Bells University of Technology logo (square version)
const BELLS_LOGO = "https://scontent.flos1-1.fna.fbcdn.net/v/t39.30808-1/301791363_460098256166220_6651964329911909183_n.jpg?stp=dst-jpg_tt6&cstp=mx1500x1500&ctp=s200x200&_nc_cat=109&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeEB9YDY7T6AYLbOnmlbEOly27OrxT4jTf7bs6vFPiNN_rrP4XGSjNMmJmCPeO4wXv40vG-m_L4lH9JF3WJC_7Qp&_nc_ohc=nLYZ7t_PPhQQ7kNvwFETl1b&_nc_oc=AdpFZY1ahvr9NxC63Fz3PBfDFaFaA6wUYYKSj7sJKU3eCfQzAaD-dosc7RWvqmdD0jI&_nc_zt=24&_nc_ht=scontent.flos1-1.fna&_nc_gid=-ezvgFVegZ1N7fBS-JYo-Q&_nc_ss=7a2a8&oh=00_AQAJHy3khG6oU7sX6iPaGo-2iWbDMeLZwlNin8JRT8tHFw&oe=6A52190F"

export default function Login() {
  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("student")
  const [isLoading, setIsLoading] = useState(false)
  const [logoError, setLogoError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      login(email, role)
      setIsLoading(false)
    }, 600)
  }

  const quickLogin = (presetEmail, presetRole) => {
    setEmail(presetEmail)
    setRole(presetRole)
    setIsLoading(true)
    setTimeout(() => {
      login(presetEmail, presetRole)
      setIsLoading(false)
    }, 400)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md">
        {/* Logo / Header */}
        <div className="text-center mb-6">
          {/* Bells University Logo */}
          <div className="flex justify-center mb-4">
            {!logoError ? (
              <img
                src={BELLS_LOGO}
                alt="Bells University of Technology"
                className="h-28 w-28 object-cover rounded-full shadow-lg ring-4 ring-white dark:ring-gray-700"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="h-28 w-28 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white text-4xl font-bold shadow-lg ring-4 ring-white dark:ring-gray-700">
                B
              </div>
            )}
          </div>

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Student Information Portal
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Bells University of Technology
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 italic">
            Only the best is good for Bells
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border dark:border-gray-700"
        >
          <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
            Sign In
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Role
              </label>
              <select
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                value={role}
                onChange={e => setRole(e.target.value)}
              >
                <option value="student">👨‍🎓 Student</option>
                <option value="admin">🧑‍💼 Admin</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white p-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="animate-spin">⏳</span> Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </div>

          {/* Quick Login Buttons */}
          <div className="mt-6 pt-6 border-t dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 text-center uppercase tracking-wide">
              Quick Demo Login
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => quickLogin("admin@portal.com", "admin")}
                className="px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-gray-700 dark:text-gray-300 transition"
              >
                🧑‍💼 Admin
              </button>
              <button
                type="button"
                onClick={() => quickLogin("student@gmail.com", "student")}
                className="px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-gray-700 dark:text-gray-300 transition"
              >
                👨‍🎓 Student
              </button>
            </div>
          </div>
        </form>

        <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-6">
          © {new Date().getFullYear()} Bells University of Technology
        </p>
      </div>
    </div>
  )
}