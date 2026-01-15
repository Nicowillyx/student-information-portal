import { useState } from "react"
import { courses } from "../data/courses"

const gradePointMap = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
  E: 1,
  F: 0,
}

export default function GPA() {
  const [grades, setGrades] = useState({})

  const calculateGPA = () => {
    let totalPoints = 0
    let totalUnits = 0

    courses.forEach(course => {
      const grade = grades[course.code]
      if (grade) {
        totalPoints += gradePointMap[grade] * course.unit
        totalUnits += course.unit
      }
    })

    return totalUnits === 0
      ? "0.00"
      : (totalPoints / totalUnits).toFixed(2)
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        GPA Calculator
      </h1>

      <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">
              Course
            </th>
            <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">
              Unit
            </th>
            <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">
              Grade
            </th>
          </tr>
        </thead>

        <tbody>
          {courses.map(course => (
            <tr
              key={course.code}
              className="border-t border-gray-300 dark:border-gray-600"
            >
              <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                {course.code}
              </td>

              <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                {course.unit}
              </td>

              <td className="px-4 py-2">
                <select
                  className="border p-1 rounded dark:bg-gray-700 dark:text-white"
                  onChange={e =>
                    setGrades({
                      ...grades,
                      [course.code]: e.target.value,
                    })
                  }
                >
                  <option value="">--</option>
                  {Object.keys(gradePointMap).map(grade => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-4 text-xl font-bold text-blue-600 dark:text-blue-400">
        GPA: {calculateGPA()}
      </p>
    </div>
  )
}