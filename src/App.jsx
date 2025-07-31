import React, { useState } from "react";
import { students } from "./studentsdata";
import "./App.css";
function App() {
  const [studentClass, setStudentClass] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [reportImage, setReportImage] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const student = students.find(
      (s) =>
        s.class === studentClass &&
        s.password === password &&
        s.dob === dob
    );

    if (student) {
      setReportImage(student.image);
      setError("");
    } else {
      setReportImage(null);
      setError("Invalid details. Please try again.");
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">BMHS Student Result Portal</h1>
      <h2>July Monthly Test Report 2025-26</h2>

      {!reportImage && (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white shadow p-4 rounded w-80"
        >
          <label htmlFor="student-class">Enter your child's class : </label>
          <input
            className="student-name" required
            placeholder="Class (e.g., 10,SKG,etc.)"
            value={studentClass}
            onChange={(e) => setStudentClass(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="student-password">Enter your password:</label>
          <input
            className="student-password" required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br/>
          <br />
          <label htmlFor="student-dob">Enter your child's dob : </label>
          <input
            className="border p-2 w-full" required
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <br />
          <br />
          <button
            type="submit"
            className="bg-blue-600 text-white w-full p-2 rounded"
          >
            View Report
          </button>
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </form>
      )}

      {reportImage && (
        <div>
          <div className="notice-board">
            <h2>Notice to Parents:</h2>
            <p>To access your child's progress report, please enter the <u>correct class/standard</u> when prompted. Without the correct standard, the report will remain hidden.</p>
          </div>
          <div className="mt-6">
            <img src={reportImage} alt="Student Report" className="border shadow" style={{maxWidth:"100%",border:"1px solid #ccc"}}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
