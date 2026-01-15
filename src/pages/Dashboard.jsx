export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-300 dark:bg-gray-800 p-4 rounded shadow">
          <p className="text-gray-600 dark:text-gray-300">Total Students</p>
          <h3 className="text-3xl font-bold">120</h3>
        </div>

        <div className="bg-gray-300 dark:bg-gray-800 p-4 rounded shadow">
          <p className="text-gray-600 dark:text-gray-300">Departments</p>
          <h3 className="text-3xl font-bold">6</h3>
        </div>

        <div className="bg-gray-300 dark:bg-gray-800 p-4 rounded shadow">
          <p className="text-gray-600 dark:text-gray-300">Active Users</p>
          <h3 className="text-3xl font-bold">35</h3>
        </div>
      </div>
    </div>
  )
}