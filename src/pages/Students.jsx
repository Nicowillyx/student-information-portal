export default function Students() {
  const students = [
    { id: 1, name: "Adebayo John", matric: "CSC/2023/001", dept: "Computer Science", level: "200" },
    { id: 2, name: "Okafor Blessing", matric: "CSC/2023/014", dept: "Computer Science", level: "200" },
    { id: 3, name: "Muhammad Sadiq", matric: "CSC/2023/021", dept: "Computer Science", level: "200" },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Students</h2>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">Name</th>
              <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">Matric No</th>
              <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">Department</th>
              <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">Level</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t border-gray-300 dark:border-gray-600">
                <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{student.name}</td>
                <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{student.matric}</td>
                <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{student.dept}</td>
                <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{student.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}