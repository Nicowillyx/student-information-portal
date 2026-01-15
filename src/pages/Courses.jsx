import { courses } from "../data/courses"

export default function Courses() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        Registered Courses
      </h1>

      <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">
              Course Code
            </th>
            <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">
              Course Title
            </th>
            <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">
              Unit
            </th>
            <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">
              Semester
            </th>
          </tr>
        </thead>

        <tbody>
          {courses.map(course => (
            <tr
              key={course.id}
              className="border-t border-gray-300 dark:border-gray-600"
            >
              <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                {course.code}
              </td>
              <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                {course.title}
              </td>
              <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                {course.unit}
              </td>
              <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                {course.semester}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}