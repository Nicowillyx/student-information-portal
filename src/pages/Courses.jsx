import { courses } from "../data/courses"

export default function Courses() {
  const totalUnits = courses.reduce((sum, c) => sum + c.unit, 0)

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          📚 Registered Courses
        </h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {courses.length} courses
          </span>
          <span className="px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
            {totalUnits} Units
          </span>
        </div>
      </div>

      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow-sm border dark:border-gray-700">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700/50 border-b dark:border-gray-700">
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Course Code</th>
              <th className="hidden sm:table-cell px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Course Title</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Unit</th>
              <th className="hidden md:table-cell px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Semester</th>
            </tr>
          </thead>
          <tbody className="divide-y dark:divide-gray-700">
            {courses.map(course => (
              <tr
                key={course.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition"
              >
                <td className="px-4 py-3 font-semibold text-blue-700 dark:text-blue-400">{course.code}</td>
                <td className="hidden sm:table-cell px-4 py-3 text-gray-700 dark:text-gray-300">{course.title}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    {course.unit}
                  </span>
                </td>
                <td className="hidden md:table-cell px-4 py-3 text-gray-600 dark:text-gray-400">{course.semester}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}