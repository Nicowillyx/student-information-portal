import { useState } from "react"
import { useAuth } from "./context/AuthContext"

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

import Dashboard from "./pages/Dashboard"
import Students from "./pages/Students"
import Profile from "./pages/Profile"
import Courses from "./pages/Courses"
import GPA from "./pages/GPA"
import Login from "./pages/Login"
import Announcements from "./pages/Announcements"

export default function App() {
  const { user } = useAuth()
  const [activePage, setActivePage] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderPage = () => {
    if (activePage === "dashboard") return <Dashboard />

    if (activePage === "students" && user.role === "admin") {
      return <Students />
    }

    if (activePage === "courses" && user.role === "student") {
      return <Courses />
    }

    if (activePage === "gpa" && user.role === "student") {
      return <GPA />
    }

    if (activePage === "profile") return <Profile />
    if (activePage === "announcements") return <Announcements />

    return <Dashboard />
  }


  if (!user) {
    return <Login />
  }

  return (
    
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white flex flex-col">
      <Navbar setActivePage={setActivePage} />

      <div className="flex flex-1">
        <Sidebar
          setActivePage={setActivePage}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 p-4 md:p-6 bg-gray-100 dark:bg-gray-900">
          {renderPage()}
        </main>
      </div>
      <Footer />
    </div>
  )
}