import { useState } from "react"

const allStudents = [
  { id: 1, name: "Adebayo John", matric: "CSC/2023/001", dept: "Computer Science", level: "200" },
  { id: 2, name: "Okafor Blessing", matric: "CSC/2023/014", dept: "Computer Science", level: "200" },
  { id: 3, name: "Muhammad Sadiq", matric: "CSC/2023/021", dept: "Computer Science", level: "200" },
  { id: 4, name: "Chukwu Emeka", matric: "CSC/2023/008", dept: "Computer Science", level: "200" },
  { id: 5, name: "Adeleke Fatima", matric: "CSC/2023/032", dept: "Computer Science", level: "200" },
  { id: 6, name: "Ibrahim Hassan", matric: "CSC/2023/019", dept: "Computer Science", level: "200" },
]

export default function Students() {
  const [search, setSearch] = useState("")

  const filtered = allStudents.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.matric.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">👨‍🎓 Students</h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {filtered.length} of {allStudents.length} students
        </span>
      </div>

      {/* Search */}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
        <input
          type="text"
          placeholder="Search by name or matric number..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
      </div>

      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow-sm border dark:border-gray-700">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700/50 border-b dark:border-gray-700">
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Matric No</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Department</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Level</th>
            </tr>
          </thead>
          <tbody className="divide-y dark:divide-gray-700">
            {filtered.map(student => (
              <tr
                key={student.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition"
              >
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">{student.name}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400 font-mono text-sm">{student.matric}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{student.dept}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                    {student.level}L
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            🔍 No students match your search.
          </div>
        )}
      </div>
    </div>
  )
}