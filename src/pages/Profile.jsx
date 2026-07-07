import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"

export default function Profile() {
  const { user } = useAuth()
  const [photo, setPhoto] = useState("")

  useEffect(() => {
    const savedPhoto = localStorage.getItem("profilePhoto")
    if (savedPhoto) setPhoto(savedPhoto)
  }, [])

  useEffect(() => {
    if (photo) {
      localStorage.setItem("profilePhoto", photo)
    }
  }, [photo])

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      setPhoto(reader.result)
    }
    reader.readAsDataURL(file)
  }

  const removePhoto = () => {
    setPhoto("")
    localStorage.removeItem("profilePhoto")
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500 dark:text-gray-400">Loading profile...</p>
      </div>
    )
  }

  const fields = [
    { label: "Full Name", value: user.name },
    { label: "Matric Number", value: user.matric },
    { label: "Department", value: user.department },
    { label: "Level", value: user.level },
    { label: "Academic Session", value: user.session },
    { label: "Email Address", value: user.email },
    { label: "Role", value: user.role },
  ]

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        👤 My Profile
      </h1>

      {/* Photo Section */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border dark:border-gray-700 mb-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative">
            {photo ? (
              <img
                src={photo}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-blue-100 dark:border-blue-900 shadow-md"
              />
            ) : (
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center text-4xl shadow-md">
                👤
              </div>
            )}
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{user.email}</p>
            <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 capitalize">
              {user.role}
            </span>

            <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
              <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition inline-flex items-center gap-1">
                📷 Upload Photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
              {photo && (
                <button
                  onClick={removePhoto}
                  className="bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  🗑️ Remove
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Info Grid */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Academic Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {fields.map(field => (
            <div key={field.label}>
              <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                {field.label}
              </label>
              <div className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 font-medium">
                {field.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}