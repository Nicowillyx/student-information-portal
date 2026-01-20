import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"

export default function Profile() {
  const { user } = useAuth()
  const [photo, setPhoto] = useState("")

  // Load saved photo
  useEffect(() => {
    const savedPhoto = localStorage.getItem("profilePhoto")
    if (savedPhoto) setPhoto(savedPhoto)
  }, [])

  // Save photo
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

  return (
    <div className="max-w-xl mx-auto px-3">
      <h1 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        Profile
      </h1>

      {photo && (
        <img
          src={photo}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4 object-cover"
        />
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handlePhotoUpload}
        className="mb-6"
      />

      <div className="space-y-4 p-3 md:p-6">

        <div>
          <label className="block text-sm mb-1 text-gray-300">
            Full Name
          </label>
          <input
            value={user.name}
            disabled
            className="w-full p-2 border rounded bg-gray-200 dark:bg-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300">
            Matric Number
          </label>
          <input
            value={user.matric}
            disabled
            className="w-full p-2 border rounded bg-gray-200 dark:bg-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300">
            Department
          </label>
          <input
            value={user.department}
            disabled
            className="w-full p-2 border rounded bg-gray-200 dark:bg-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300">
            Level
          </label>
          <input
            value={user.level}
            disabled
            className="w-full p-2 border rounded bg-gray-200 dark:bg-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300">
            Academic Session
          </label>
          <input
            value={user.session}
            disabled
            className="w-full p-2 border rounded bg-gray-200 dark:bg-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300">
            Email Address
          </label>
          <input
            value={user.email}
            disabled
            className="w-full p-2 border rounded bg-gray-200 dark:bg-gray-600"
          />
        </div>

      </div>
    </div>
  )
}