# Offline Exam Portal — LMS Assessment Module

A lightweight, fully offline assessment module built as part of a Learning 
Management System (LMS) workflow, designed to conduct standardized 
multiple-choice exams with zero dependency on internet connectivity or a 
backend server. Developed for the Kharazmi Educational Center as a custom 
evaluation tool within their learning platform — this instance was configured 
to assess students on the Django Framework course, but the underlying 
assessment engine is subject-agnostic and reusable for any course content.

Built entirely with Vanilla JavaScript — no backend server or internet 
connection required.

## 🌟 Key Features

- **Fully Offline:** Runs entirely in the browser, with no internet connection needed — built for real classroom conditions where reliable connectivity can't be guaranteed.
- **Automated Timer:** Strict 33-minute timer that automatically ends the exam when time is up.
- **Standardized Assessment Engine:** Supports structured multiple-choice question sets (currently configured with 33 questions, ~3.03 points each, scored out of 100).
- **One-Attempt Integrity Control:** Student registration via name and national ID ensures one attempt per candidate — critical for standardized evaluation.
- **Responsive Design:** Fully compatible with desktop, tablet, and mobile devices.
- **Cross-Browser Support:** Works seamlessly on Chrome, Firefox, Edge, and Safari.
- **Instant Results:** Automatically calculates final score, correct-answer count, and time spent — no manual grading required.

## 📁 Project Structure

Frontend-only architecture with no complex environment setup:

- `index.html` — main structure and user interface of the exam.
- `style.css` — visual appearance and responsive layout.
- `questions.js` — the question bank (currently 33 Django-related multiple-choice questions; swappable for any subject).
- `db.js` — handles local data storage management.
- `exam.js` — core assessment logic: timer, navigation, and scoring.

## 📋 Usage Instructions (For Students)

1. **Registration:** Enter your First Name, Last Name, and National ID to begin. Each candidate is strictly allowed only one attempt.
2. **Taking the Exam:** Use "Previous Question" / "Next Question" to navigate.
3. **Completion:** End the exam early via "End Exam," or it auto-submits when the 33-minute timer expires.
4. **Submission:** Results (Score, Correct Answers, Time Spent) display on screen. Send them privately to the instructor via Telegram by 20:00 on exam day.
5. **Allowed Timeframe:** 08:00–20:00 on exam day.
6. **Support:** Contact the center's education management for technical issues.

## ⚖️ Legal & Copyright

This software is designed strictly for educational purposes as part of the 
center's learning management workflow.

All material and intellectual property rights belong to Kharazmi Educational Center.

Last Updated: January 2025 (Dey 1403)
Copyright © 2025 (1403) Kharazmi Educational Center. All rights reserved.
