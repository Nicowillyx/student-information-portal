🎓 Student Information Portal
📌 Project Overview

The Student Information Portal is a responsive frontend web application designed to manage and display academic information for university students and administrators. The system provides role-based access, allowing administrators and students to interact with features relevant to their roles.

This project was developed as part of an academic frontend software development requirement, emphasizing modern UI/UX design, responsive layouts, and clean component-based architecture using React.

🎯 Project Objectives

  To design a user-friendly academic portal interface

  To implement role-based access control (Admin & Student)

  To ensure responsiveness across mobile, tablet, and desktop devices

  To simulate real-world academic data handling (courses, GPA, announcements)

  To apply modern frontend development practices

🚀 Features

🔐 Authentication & Role Separation

  Login system with predefined roles:
     Admin
     Student

  Conditional rendering of pages based on user role

📊 Dashboard

  Central landing page for both roles

  Displays relevant overview information

👨‍🎓 Student Features

  View registered courses
  GPA calculator based on selected grades
  View announcements
  View personal profile information

🧑‍💼 Admin Features

  View list of students
  Create and manage announcements
  Access admin dashboard tools

📢 Announcements Module

  Admin can post announcements
  Announcements persist using local storage
  Students can view announcements in real time

🧮 GPA Calculator

  Students input grades for registered courses
  GPA is calculated automatically using credit units
  Uses standard grading point logic

👤 Profile Module

  Displays static user details from signup
  Profile photo upload with local persistence
  Includes academic session information

🌗 Dark Mode

  Light and dark theme toggle
  User preference stored in local storage

📱 Responsive Design

  Fully responsive layout
  Mobile-friendly navigation with dropdown menu
  Optimized tables and content for small screens

🛠️ Tech Stack

  Frontend: React.js (Vite)
  Styling: Tailwind CSS
  State Management: React Context API
  Persistence: Browser Local Storage
  Version Control: Git & GitHub
  Deployment: GitHub Pages

📂 Project Structure
student-information-portal/
│
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   │
│   ├── context/
│   │   ├── AnnouncementContext.jsx
│   │   ├── AuthContext.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── data/
│   │   └── courses.js
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Students.jsx
│   │   ├── Courses.jsx
│   │   ├── GPA.jsx
│   │   ├── Profile.jsx
│   │   ├── Login.jsx
│   │   └── Announcements.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── dist/
├── node_modules/
├── public/
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/student-information-portal.git

2️⃣ Navigate into the project folder
cd student-information-portal

3️⃣ Install dependencies
npm install

4️⃣ Run the development server
npm run dev

🌍 Deployment

The project is deployed using GitHub Pages.

Build and deploy commands:
 npm run build
 npm run deploy

🚀 Usage

1. Open the application
2. Log in as Admin (admin@portal.com) or Student (username@gmail.com)
3. Navigate through the dashboard, courses, GPA, announcements, and profile
4. Toggle dark mode as preferred
5. Use mobile menu on smaller devices

⚠️ Limitations

Backend and database are simulated using browser local storage

Authentication is frontend-based (not production secure)

No real-time server communication

🔮 Future Improvements

Integrate a real backend (Node.js / Firebase)

Use a database for persistent storage

Implement real authentication (JWT / OAuth)

Add result transcript export

Add admin analytics dashboard

👨‍💻 Author

Student Information Portal
Developed by: Abiodun Ajibola Williams
Department: Computer Science
Institution: Bells University of Technology

📜 License

This project is developed strictly for academic purposes.