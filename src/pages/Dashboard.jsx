import { useAuth } from "../context/AuthContext"

export default function Dashboard({ setActivePage }) {
  const { user } = useAuth()

  const stats = [
    { label: "Total Students", value: "120", icon: "👨‍🎓", color: "blue" },
    { label: "Departments", value: "6", icon: "🏛️", color: "emerald" },
    { label: "Active Users", value: "35", icon: "🟢", color: "amber" },
  ]

  const quickActions = [
    { id: "announcements", label: "📢 View Announcements", desc: "Check latest updates" },
    { id: "profile", label: "👤 My Profile", desc: "View your academic info" },
    ...(user?.role === "student"
      ? [
          { id: "courses", label: "📚 My Courses", desc: "View registered courses" },
          { id: "gpa", label: "🧮 Calculate GPA", desc: "Compute your GPA" },
        ]
      : [
          { id: "students", label: "👨‍🎓 Student List", desc: "View all students" },
        ]),
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Welcome back, {user?.name?.split(" ")[0] || "Student"}!
        </h2>
        <p className="text-blue-100">
          {user?.role === "admin"
            ? "Manage student records and post announcements."
            : "Track your courses, calculate GPA, and stay updated."}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{stat.icon}</span>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-${stat.color}-100 dark:bg-${stat.color}-900/30 text-${stat.color}-700 dark:text-${stat.color}-300`}>
                Live
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {quickActions.map(action => (
            <button
              key={action.id}
              onClick={() => setActivePage?.(action.id)}
              className="text-left bg-white dark:bg-gray-800 p-4 rounded-xl border dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all group cursor-pointer"
            >
              <p className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                {action.label}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{action.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}