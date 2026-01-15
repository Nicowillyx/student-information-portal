import { createContext, useContext, useState } from "react"

const AnnouncementContext = createContext()

export function AnnouncementProvider({ children }) {
  const [announcements, setAnnouncements] = useState(() => {
    const saved = localStorage.getItem("announcements")
    return saved ? JSON.parse(saved) : []
  })

  const addAnnouncement = message => {
    const updated = [
      ...announcements,
      {
        id: Date.now(),
        message,
        date: new Date().toLocaleDateString(),
      },
    ]

    setAnnouncements(updated)
    localStorage.setItem(
      "announcements",
      JSON.stringify(updated)
    )
  }

  return (
    <AnnouncementContext.Provider
      value={{ announcements, addAnnouncement }}
    >
      {children}
    </AnnouncementContext.Provider>
  )
}

export function useAnnouncements() {
  return useContext(AnnouncementContext)
}