import { useState } from "react"
import { useTheme } from "../context/ThemeContext"
import { useAuth } from "../context/AuthContext"

// Bells University of Technology logo (square version)
const BELLS_LOGO = "https://scontent.flos1-1.fna.fbcdn.net/v/t39.30808-1/301791363_460098256166220_6651964329911909183_n.jpg?stp=dst-jpg_tt6&cstp=mx1500x1500&ctp=s200x200&_nc_cat=109&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeEB9YDY7T6AYLbOnmlbEOly27OrxT4jTf7bs6vFPiNN_rrP4XGSjNMmJmCPeO4wXv40vG-m_L4lH9JF3WJC_7Qp&_nc_ohc=nLYZ7t_PPhQQ7kNvwFETl1b&_nc_oc=AdpFZY1ahvr9NxC63Fz3PBfDFaFaA6wUYYKSj7sJKU3eCfQzAaD-dosc7RWvqmdD0jI&_nc_zt=24&_nc_ht=scontent.flos1-1.fna&_nc_gid=-ezvgFVegZ1N7fBS-JYo-Q&_nc_ss=7a2a8&oh=00_AQAJHy3khG6oU7sX6iPaGo-2iWbDMeLZwlNin8JRT8tHFw&oe=6A52190F"

export default function Navbar({ setActivePage, activePage }) {
  const { darkMode, toggleTheme } = useTheme()
  const { user, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  const navItems = [
    { id: "dashboard", label: "Dashboard", roles: ["admin", "student"] },
    { id: "students", label: "Students", roles: ["admin"] },
    { id: "courses", label: "Courses", roles: ["student"] },
    { id: "gpa", label: "GPA", roles: ["student"] },
    { id: "announcements", label: "Announcements", roles: ["admin", "student"] },
    { id: "profile", label: "Profile", roles: ["admin", "student"] },
  ]

  const visibleItems = navItems.filter(item =>
    item.roles.includes(user?.role)
  )

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-4 md:px-6 py-3 shadow-lg sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="md:hidden text-2xl hover:text-blue-200 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          {!logoError ? (
            <img
              src={BELLS_LOGO}
              alt="Bells University"
              className="h-10 w-10 object-cover rounded-full ring-2 ring-white/30"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">
              B
            </div>
          )}
          <div>
            <h1 className="text-lg md:text-xl font-bold tracking-tight leading-tight">
              Student Portal
            </h1>
            <p className="text-[10px] text-blue-200 hidden sm:block">Bells University of Technology</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition"
            aria-label="Toggle theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Logout (desktop) */}
          <button
            onClick={logout}
            className="hidden md:flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition"
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border dark:border-gray-700">
          <ul className="divide-y dark:divide-gray-700">
            {visibleItems.map(item => (
              <li
                key={item.id}
                onClick={() => {
                  setActivePage(item.id)
                  setMenuOpen(false)
                }}
                className={`px-4 py-3 cursor-pointer transition font-medium ${
                  activePage === item.id
                    ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                {item.label}
              </li>
            ))}
            <li
              onClick={logout}
              className="px-4 py-3 cursor-pointer text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 font-medium transition"
            >
              🚪 Logout
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}