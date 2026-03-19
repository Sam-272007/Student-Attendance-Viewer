const { useState, useEffect } = React;

function App() {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("ALL");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showLowAttendance, setShowLowAttendance] = useState(false);
  const [sortOrder, setSortOrder] = useState("NONE");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const updated = data.map((student) => ({
          ...student,
          attendance: Math.floor(Math.random() * 101),
          status: Math.random() > 0.5 ? "PRESENT" : "ABSENT",
        }));
        setStudents(updated);
      });
  }, []);

  const filteredStudents = students
    .filter((student) => {
      if (filter === "PRESENT") return student.status === "PRESENT";
      if (filter === "ABSENT") return student.status === "ABSENT";
      return true;
    })
    .filter((student) => {
      if (showLowAttendance) return student.attendance < 75;
      return true;
    })
    .sort((a, b) => {
      if (sortOrder === "ASC") return a.attendance - b.attendance;
      if (sortOrder === "DESC") return b.attendance - a.attendance;
      return 0;
    });

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1>🎓 Student Attendance Viewer</h1>
          <p className="subtitle">Track and monitor student attendance</p>
        </div>

        <div className="filter-section">
          <div className="filter-group">
            <span className="filter-label">Filter by Status:</span>
            <div className="button-group">
              <button
                className={`filter-btn ${filter === "ALL" ? "active" : ""}`}
                onClick={() => setFilter("ALL")}
              >
                All Students
              </button>
              <button
                className={`filter-btn ${filter === "PRESENT" ? "active" : ""}`}
                onClick={() => setFilter("PRESENT")}
              >
                Present
              </button>
              <button
                className={`filter-btn ${filter === "ABSENT" ? "active" : ""}`}
                onClick={() => setFilter("ABSENT")}
              >
                Absent
              </button>
            </div>
          </div>

          <div className="filter-group">
            <span className="filter-label">Sort:</span>
            <div className="button-group">
              <button
                className={`sort-btn ${sortOrder === "ASC" ? "active" : ""}`}
                onClick={() => setSortOrder("ASC")}
              >
                ↑ Low to High
              </button>
              <button
                className={`sort-btn ${sortOrder === "DESC" ? "active" : ""}`}
                onClick={() => setSortOrder("DESC")}
              >
                ↓ High to Low
              </button>
              {sortOrder !== "NONE" && (
                <button
                  className="sort-btn reset"
                  onClick={() => setSortOrder("NONE")}
                >
                  ✕ Reset
                </button>
              )}
            </div>
          </div>

          <div className="filter-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={showLowAttendance}
                onChange={() => setShowLowAttendance(!showLowAttendance)}
              />
              <span>Show only &lt; 75% attendance</span>
            </label>
          </div>
        </div>

        <div className="results-info">
          Showing {filteredStudents.length} of {students.length} students
        </div>

        <div className="table-wrapper">
          {filteredStudents.length > 0 ? (
            <table className="students-table">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Attendance Rate</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr
                    key={student.id}
                    onClick={() => setSelectedStudent(student.id)}
                    className={`student-row ${
                      selectedStudent === student.id ? "selected" : ""
                    }`}
                  >
                    <td className="name-cell">{student.name}</td>
                    <td className="attendance-cell">
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${student.attendance}%`,
                          }}
                        />
                      </div>
                      <span className="attendance-text">{student.attendance}%</span>
                    </td>
                    <td>
                      <div className="badge-container">
                        <span
                          className={`badge ${
                            student.status === "PRESENT" ? "badge-present" : "badge-absent"
                          }`}
                        >
                          {student.status === "PRESENT" ? "✓ Present" : "✕ Absent"}
                        </span>
                        <span
                          className={`badge ${
                            student.attendance >= 75 ? "badge-good" : "badge-low"
                          }`}
                        >
                          {student.attendance >= 75 ? "✓ Good" : "⚠ Low"}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="empty-state">
              <p>No students match your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
