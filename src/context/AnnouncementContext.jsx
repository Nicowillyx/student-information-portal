import { createContext, useContext, useState } from "react"

const AnnouncementContext = createContext()

export function AnnouncementProvider({ children }) {
  const [announcements, setAnnouncements] = useState(() => {
    const saved = localStorage.getItem("announcements")
    return saved ? JSON.parse(saved) : []
  })

  const addAnnouncement = message => {
    setAnnouncements(prev => {
      const updated = [
        ...prev,
        {
          id: Date.now(),
          message,
          date: new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }),
        },
      ]
      localStorage.setItem("announcements", JSON.stringify(updated))
      return updated
    })
  }

  const deleteAnnouncement = id => {
    setAnnouncements(prev => {
      const updated = prev.filter(a => a.id !== id)
      localStorage.setItem("announcements", JSON.stringify(updated))
      return updated
    })
  }

  return (
    <AnnouncementContext.Provider
      value={{ announcements, addAnnouncement, deleteAnnouncement }}
    >
      {children}
    </AnnouncementContext.Provider>
  )
}

export function useAnnouncements() {
  return useContext(AnnouncementContext)
}