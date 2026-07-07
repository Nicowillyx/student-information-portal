import { useState } from "react"
import { courses } from "../data/courses"

const gradePointMap = {
  A: { point: 5, color: "emerald" },
  B: { point: 4, color: "blue" },
  C: { point: 3, color: "yellow" },
  D: { point: 2, color: "orange" },
  E: { point: 1, color: "red" },
  F: { point: 0, color: "gray" },
}

export default function GPA() {
  const [grades, setGrades] = useState({})

  const calculateGPA = () => {
    let totalPoints = 0
    let totalUnits = 0

    courses.forEach(course => {
      const grade = grades[course.code]
      if (grade) {
        totalPoints += gradePointMap[grade].point * course.unit
        totalUnits += course.unit
      }
    })

    return totalUnits === 0
      ? "0.00"
      : (totalPoints / totalUnits).toFixed(2)
  }

  const gpa = parseFloat(calculateGPA())
  const getGPAColor = () => {
    if (gpa >= 4.5) return "text-emerald-600 dark:text-emerald-400"
    if (gpa >= 3.5) return "text-blue-600 dark:text-blue-400"
    if (gpa >= 2.5) return "text-yellow-600 dark:text-yellow-400"
    if (gpa >= 1.5) return "text-orange-600 dark:text-orange-400"
    return "text-red-600 dark:text-red-400"
  }

  const getGradeLabel = () => {
    if (gpa >= 4.5) return "First Class 🌟"
    if (gpa >= 3.5) return "Second Class Upper 👍"
    if (gpa >= 2.5) return "Second Class Lower ✓"
    if (gpa >= 1.5) return "Third Class"
    return "Pass"
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        🧮 GPA Calculator
      </h1>

      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow-sm border dark:border-gray-700">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700/50 border-b dark:border-gray-700">
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Course</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Title</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Unit</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y dark:divide-gray-700">
            {courses.map(course => {
              const selectedGrade = grades[course.code]
              return (
                <tr
                  key={course.code}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition"
                >
                  <td className="px-4 py-3 font-semibold text-blue-700 dark:text-blue-400">{course.code}</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{course.title}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                      {course.unit}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <select
                      className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition min-w-[80px]"
                      value={selectedGrade || ""}
                      onChange={e =>
                        setGrades(prev => ({
                          ...prev,
                          [course.code]: e.target.value || undefined,
                        }))
                      }
                    >
                      <option value="">--</option>
                      {Object.entries(gradePointMap).map(([grade, info]) => (
                        <option key={grade} value={grade}>
                          {grade} ({info.point})
                        </option>
                      ))}
                    </select>
                    {selectedGrade && (
                      <span className={`ml-2 text-xs font-semibold text-${gradePointMap[selectedGrade].color}-600 dark:text-${gradePointMap[selectedGrade].color}-400`}>
                        {gradePointMap[selectedGrade].point} pts
                      </span>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* GPA Result Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Calculated GPA</p>
          <p className={`text-4xl font-bold ${getGPAColor()}`}>
            {calculateGPA()}
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">
            {getGradeLabel()}
          </p>
        </div>
        <button
          onClick={() => setGrades({})}
          className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition"
        >
          🔄 Reset Grades
        </button>
      </div>
    </div>
  )
}