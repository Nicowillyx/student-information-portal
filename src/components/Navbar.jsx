import { useState } from "react"
import { useTheme } from "../context/ThemeContext"
import { useAuth } from "../context/AuthContext"

export default function Navbar({ setActivePage }) {
  const { toggleTheme } = useTheme()
  const { user } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-blue-800 text-white px-4 md:px-6 py-4 shadow-md relative">
      
      <div className="flex items-center justify-between">
        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

        <h1 className="text-lg md:text-xl font-semibold">
          Student Information Portal
        </h1>

        <button
          onClick={toggleTheme}
          className="bg-white text-blue-800 px-3 py-1 rounded-md text-sm font-medium"
        >
          Toggle Theme
        </button>
      </div>

      {/* 🔽 MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white text-black rounded shadow">
          <ul className="divide-y">

            <li
              onClick={() => { setActivePage("dashboard"); setMenuOpen(false) }}
              className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
            >
              Dashboard
            </li>

            {user.role === "admin" && (
              <li
                onClick={() => { setActivePage("students"); setMenuOpen(false) }}
                className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
              >
                Students
              </li>
            )}

            {user.role === "student" && (
              <>
                <li
                  onClick={() => { setActivePage("courses"); setMenuOpen(false) }}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  Courses
                </li>

                <li
                  onClick={() => { setActivePage("gpa"); setMenuOpen(false) }}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  GPA
                </li>
              </>
            )}

            <li
              onClick={() => { setActivePage("announcements"); setMenuOpen(false) }}
              className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
            >
              Announcements
            </li>

            <li
              onClick={() => { setActivePage("profile"); setMenuOpen(false) }}
              className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
            >
              Profile
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}