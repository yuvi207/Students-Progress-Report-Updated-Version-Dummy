import React, { useState } from "react";
import { students } from "./studentsdata";

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
      <h1 className="text-2xl font-bold mb-4">Student Result Portal</h1>

      {!reportImage && (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white shadow p-4 rounded w-80"
        >
          <input
            className="border p-2 w-full"
            placeholder="Class (e.g., 10)"
            value={studentClass}
            onChange={(e) => setStudentClass(e.target.value)}
          />
          <input
            className="border p-2 w-full"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="border p-2 w-full"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
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
        <div className="mt-6">
          <img src={reportImage} alt="Student Report" className="border shadow" style={{maxWidth:"100%",border:"1px solid #ccc"}}/>
        </div>
      )}
    </div>
  );
}

export default App;
