import { useAuth } from "../context/AuthContext"

const navItems = [
  { id: "dashboard", label: "📊 Dashboard", roles: ["admin", "student"] },
  { id: "students", label: "👨‍🎓 Students", roles: ["admin"] },
  { id: "courses", label: "📚 Courses", roles: ["student"] },
  { id: "gpa", label: "🧮 GPA Calculator", roles: ["student"] },
  { id: "announcements", label: "📢 Announcements", roles: ["admin", "student"] },
  { id: "profile", label: "👤 Profile", roles: ["admin", "student"] },
]

export default function Sidebar({ setActivePage, activePage }) {
  const { user, logout } = useAuth()

  const visibleItems = navItems.filter(item =>
    item.roles.includes(user?.role)
  )

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-800 min-h-screen border-r dark:border-gray-700 shadow-sm">
      <div className="p-4">
        <div className="mb-6 px-2">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Logged in as</p>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-200 truncate">{user?.email}</p>
          <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium capitalize">
            {user?.role}
          </span>
        </div>

        <ul className="space-y-1">
          {visibleItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => setActivePage(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activePage === item.id
                    ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto p-4 border-t dark:border-gray-700">
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition"
        >
          🚪 Logout
        </button>
      </div>
    </aside>
  )
}