import { useTheme } from "../context/ThemeContext"

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="bg-blue-800 text-white px-6 py-4 shadow-md flex justify-between">
      <h1 className="text-xl font-semibold">
        Student Information Portal
      </h1>

      <button
        onClick={toggleTheme}
        className="bg-white text-blue-800 px-3 py-1 rounded"
      >
        Toggle Theme
      </button>
    </nav>
  )
}