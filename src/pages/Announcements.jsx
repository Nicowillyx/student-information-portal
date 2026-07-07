import { useState } from "react"
import { useAnnouncements } from "../context/AnnouncementContext"
import { useAuth } from "../context/AuthContext"

export default function Announcements() {
  const { announcements, addAnnouncement, deleteAnnouncement } = useAnnouncements()
  const { user } = useAuth()
  const [message, setMessage] = useState("")
  const [isPosting, setIsPosting] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    if (!message.trim()) return

    setIsPosting(true)
    setTimeout(() => {
      addAnnouncement(message.trim())
      setMessage("")
      setIsPosting(false)
    }, 300)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          📢 Announcements
        </h1>
        <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
          {announcements.length} total
        </span>
      </div>

      {/* Admin Post Form */}
      {user?.role === "admin" && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border dark:border-gray-700">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
            Post New Announcement
          </h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <textarea
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
              placeholder="What's the announcement?"
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={3}
              maxLength={500}
            />
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {message.length}/500
              </span>
              <button
                type="submit"
                disabled={!message.trim() || isPosting}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 dark:disabled:bg-blue-800 text-white px-5 py-2 rounded-lg font-medium transition flex items-center gap-2"
              >
                {isPosting ? "⏳ Posting..." : "📤 Post Announcement"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Announcements List */}
      {announcements.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl border dark:border-gray-700 border-dashed">
          <span className="text-4xl">📭</span>
          <p className="text-gray-500 dark:text-gray-400 mt-2 font-medium">
            No announcements yet.
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            {user?.role === "admin" ? "Post the first one above!" : "Check back later for updates."}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {announcements.map(a => (
            <div
              key={a.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border dark:border-gray-700 hover:shadow-md transition group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-gray-900 dark:text-gray-100 leading-relaxed">
                    {a.message}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      📅 {a.date}
                    </span>
                    <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      #{a.id.toString().slice(-4)}
                    </span>
                  </div>
                </div>

                {user?.role === "admin" && (
                  <button
                    onClick={() => {
                      if (confirm("Delete this announcement?")) {
                        deleteAnnouncement(a.id)
                      }
                    }}
                    className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 dark:hover:text-red-300 p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20 transition"
                    title="Delete"
                  >
                    🗑️
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}