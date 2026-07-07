export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 px-4 md:px-6 py-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500 dark:text-gray-400">
        <p>
          © {new Date().getFullYear()} Student Information Portal
        </p>
        <div className="flex items-center gap-3">
          <span>Built with React + Tailwind</span>
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <a
            href="https://github.com/Nicowillyx/student-information-portal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}