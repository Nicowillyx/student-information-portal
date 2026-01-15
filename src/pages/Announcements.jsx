import { useState } from "react"
import { useAnnouncements } from "../context/AnnouncementContext"
import { useAuth } from "../context/AuthContext"

export default function Announcements() {
  const { announcements, addAnnouncement } =
    useAnnouncements()
  const { user } = useAuth()
  const [message, setMessage] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if (message.trim()) {
      addAnnouncement(message)
      setMessage("")
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Announcements
      </h1>

      {user.role === "admin" && (
        <form
          onSubmit={handleSubmit}
          className="mb-6"
        >
          <textarea
            className="w-full border p-2 mb-2"
            placeholder="Post an announcement..."
            value={message}
            onChange={e =>
              setMessage(e.target.value)
            }
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Post Announcement
          </button>
        </form>
      )}

      {announcements.length === 0 && (
        <p className="text-gray-500">
            No announcements available.
        </p>
    )}

      <ul className="space-y-4">
        {announcements.map(a => (
          <li
            key={a.id}
            className="border p-4 bg-white shadow"
          >
            <p>{a.message}</p>
            <small className="text-gray-500">
              {a.date}
            </small>
          </li>
        ))}
      </ul>
    </div>
  )
}