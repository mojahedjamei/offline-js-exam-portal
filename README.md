Django Framework Offline Exam Portal
A lightweight, fully offline web application designed to conduct multiple-choice exams. This project was specifically developed for the Kharazmi Educational Center to evaluate students on the Django Framework. Built entirely with Vanilla JavaScript, it requires no backend server or internet connection to run.

🌟 Key Features
Fully Offline: The application runs entirely in the browser without needing an internet connection.

Automated Timer: Features a strict 33-minute timer that automatically ends the exam when the time is up.

Standardized Assessment: Contains 33 multiple-choice questions. Each question is valued at approximately 3.03 points out of a total score of 100.

Responsive Design: Fully compatible with Desktop, Tablet, and Mobile devices.

Cross-Browser Support: Works seamlessly on modern browsers including Chrome, Firefox, Edge, and Safari.

Instant Results: Automatically calculates the final score out of 100, the total number of correct answers, and the exact time spent on the exam.

📁 Project Structure
Since this is a frontend-only Vanilla JS project, the architecture is straightforward and requires no complex environment setup:

index.html: The main structure and user interface of the exam.

style.css: The visual appearance and responsive layout of the application.

questions.js: An array containing the 33 Django-related multiple-choice questions.

db.js: Handles data storage management.

exam.js: The core logic of the application, including the timer, navigation, and final score calculation.

📋 Usage Instructions (For Students)
Registration: Enter your First Name, Last Name, and National ID to begin. Please note that each candidate is strictly allowed only one attempt.

Taking the Exam: Use the "Previous Question" and "Next Question" buttons to navigate through the assessment.

Completion: You can choose to end the exam early by clicking the "End Exam" button. Otherwise, it will automatically submit when the 33-minute timer expires.

Submission: Upon completion, your results (Score, Correct Answers, Time Spent) will be displayed on the screen. You must send these results privately to the instructor via Telegram by maximum 20:00 on the day of the exam.

Allowed Timeframe: The valid window for participating in the exam and submitting results is strictly from 08:00 AM to 08:00 PM (20:00).

Support: In case of any technical issues, please contact the center's education management.

⚖️ Legal & Copyright
This software is designed strictly for educational purposes.

All material and intellectual property rights belong to the Kharazmi Educational Center.

Last Updated: January 2025 (Dey 1403).

Copyright: All rights reserved © 2025 (1403) Kharazmi Educational Center.
