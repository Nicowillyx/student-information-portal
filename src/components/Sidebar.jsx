import { useAuth } from "../context/AuthContext"

export default function Sidebar({ setActivePage }) {
  const { user } = useAuth()

  return (
    <aside className="hidden md:block w-64 bg-white dark:bg-gray-800 min-h-screen">
      <ul className="p-4 space-y-4">

        <li onClick={() => setActivePage("dashboard")}
            className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-700 cursor-pointer">
          Dashboard
        </li>

        {user.role === "admin" && (
          <li onClick={() => setActivePage("students")}
              className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-700 cursor-pointer">
            Students
          </li>
        )}

        {user.role === "student" && (
          <>
            <li onClick={() => setActivePage("courses")}
                className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-700 cursor-pointer">
              Courses
            </li>

            <li onClick={() => setActivePage("gpa")}
                className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-700 cursor-pointer">
              GPA
            </li>
          </>
        )}

        <li onClick={() => setActivePage("announcements")}
            className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-700 cursor-pointer">
          Announcements
        </li>

        <li onClick={() => setActivePage("profile")}
            className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-700 cursor-pointer">
          Profile
        </li>
      </ul>
    </aside>
  )
}
