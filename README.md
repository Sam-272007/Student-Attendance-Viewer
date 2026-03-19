# 🎓 Student Attendance Viewer

A modern, interactive web application for tracking and managing student attendance with real-time filtering, sorting, and status visualization.

## ✨ Features

- **Real-time Student Data**: Fetches student data from JSONPlaceholder API
- **Attendance Tracking**: View historical attendance percentage for each student
- **Daily Status**: Track present/absent status for the current day
- **Smart Filtering**: Filter students by:
  - All Students
  - Present Status
  - Absent Status
  - Low Attendance (<75%)
- **Advanced Sorting**: Sort by attendance percentage (ascending/descending)
- **Visual Indicators**:
  - Progress bars showing attendance percentage
  - Color-coded badges (Green = Good/Present, Red = Low/Absent, Blue = Present, Gray = Absent)
- **Interactive UI**: Click rows to select and highlight students
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Theme**: Modern dark interface with elegant gradients

## 🚀 Live Demo

Visit: [https://sam-272007.github.io/Student-Attendance-Viewer/](https://sam-272007.github.io/Student-Attendance-Viewer/)

## 📦 Technologies Used

- **React 18** - UI Framework (via CDN)
- **Babel** - JSX compilation (via CDN)
- **CSS3** - Modern styling with gradients and animations
- **JSONPlaceholder API** - Mock student data

## 📁 File Structure

```
attendance-viewer/
├── index.html          # Main HTML file (all-in-one)
├── README.md          # Project documentation
└── (Optional: styles.css, app.js for separated structure)
```

## 🎯 How to Use

### View Live
Simply open the live link: [https://sam-272007.github.io/Student-Attendance-Viewer/](https://sam-272007.github.io/Student-Attendance-Viewer/)

### Run Locally
1. Clone the repository:
```bash
git clone https://github.com/Sam-272007/Student-Attendance-Viewer.git
cd Student-Attendance-Viewer
```

2. Open `index.html` in your browser:
   - Double-click the file, or
   - Right-click → Open with → Browser

3. The app will load student data automatically

## 🎮 Using the App

### Filter Students
- **All Students**: View all 10 students
- **Present**: Show only students marked present today
- **Absent**: Show only students marked absent today

### Sort by Attendance
- **↑ Low to High**: Sort from lowest to highest attendance percentage
- **↓ High to Low**: Sort from highest to lowest attendance percentage
- **Reset**: Clear sorting

### Low Attendance Filter
- Check the checkbox to show only students with <75% attendance
- Uncheck to see all filtered students

### Select Student
- Click any row to highlight the student (yellow highlight)
- Click again to deselect

## 📊 Student Data Structure

Each student has:
- **Name**: Student name from API
- **Attendance %**: Historical attendance percentage (0-100%)
- **Daily Status**: Present/Absent for today
- **Performance Badge**: Good (≥75%) or Low (<75%)

## 🌈 Color Scheme

- **🔵 Blue Badge**: Student is Present
- **⚪ Gray Badge**: Student is Absent
- **🟢 Green Badge**: Good Attendance (≥75%)
- **🔴 Red Badge**: Low Attendance (<75%)

## 🛠️ Development

### To Modify
1. Edit the `index.html` file
2. CSS is in the `<style>` tag
3. JavaScript is in the `<script type="text/babel">` tag
4. Save and refresh browser

### Separate Files (Optional)
If you want to split into separate files:
- Extract CSS to `styles.css`
- Extract JS to `app.js`
- Update `index.html` to link them

## 📱 Responsive Design

The app is fully responsive:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (< 768px)

## 🚀 Deployment

### GitHub Pages (Current Setup)
1. Push to GitHub
2. Go to **Settings → Pages**
3. Select **Deploy from a branch → main**
4. Your site is live at: `https://yourusername.github.io/Student-Attendance-Viewer/`

### Other Platforms
- **Vercel**: Connect GitHub repo, auto-deploys
- **Netlify**: Drag & drop `index.html`
- **AWS S3**: Upload file to S3 bucket
- **Firebase Hosting**: Deploy with Firebase CLI

## 📋 Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for API and CDN resources)

## 🔗 API Used

**JSONPlaceholder Users API**
- Endpoint: `https://jsonplaceholder.typicode.com/users`
- Returns: 10 mock users
- Attendance % and Status: Generated randomly

## 🎓 Learning Outcomes

This project demonstrates:
- ✅ React Hooks (useState, useEffect)
- ✅ Array filtering and sorting
- ✅ Conditional rendering
- ✅ Event handling
- ✅ CSS styling and animations
- ✅ API integration
- ✅ Responsive design
- ✅ Component-based architecture

## 🐛 Known Issues

None reported. Please open an issue if you find any bugs!

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created by: Dhevi Samuktha A

