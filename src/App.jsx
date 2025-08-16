import React, { useState } from "react";
import { students } from "./STD10studentsdata";
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
    <div>
      <h1 className="heading" style={{color:"red"}}><abbr title="BMSAP">Beula Matric's <span className="colorspan" style={{color:"blue"}}>Students' Academic Progress</span></abbr></h1>
      {!reportImage && (
        <div>
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
            type="text"
            placeholder="DDMMYYYY"
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
        <br />
        <div className="notice-board">
          <br />
            <h2>Progress report ஐ காண கீழ் தந்துள்ள வழிமுறையை பின்பற்றவும்</h2>
            <h3>அன்பிற்கினிய பெற்றோருக்கு, வணக்கம்.</h3>
            <h4>தங்கள் மகன்/மகளின் மதிப்பெண் பட்டியலை அறிய மொபைலில் காணும் வழிமுறைகள்:</h4>
            <ul>
              <li>தங்கள் மகன்/மகள் பயிலும் வகுப்பினை குறிப்பிடவும் (JKG,SKG,1-12).</li>
              <li>Password: BMS உடன் தங்கள் மகன்/மகளின் பெயரில் உள்ள முதல் நான்கு எழுத்துகளை ஆங்கிலத்தில் (CAPITAL LETTERS) உள்ளிடவும். மூன்று எழுத்துப் பெயருடையவராக இருப்பின், முன்னெழுத்தையும் (initial) நான்காவது எழுத்தாக இணைத்துக் கொள்ளவும்.</li>
              <li>தங்கள் மகன்/மகளின் பிறந்த தேதியை உள்ளீடு  செய்யவும். (எ.கா: 09092010)</li>
              <li>View Report இல் கிளிக் செய்யவும்.</li>
              <li>இப்போது தங்கள் மகன்/மகளின் ஜூலை மாத Progress Report-ஐ காணலாம்.</li>
            </ul>
            <br />
          </div>
        </div>
      )}

      {reportImage && (
        <div>
          <div className="mt-6">
            <img src={reportImage} alt="Student Report" className="borders" style={{maxWidth:"100%",border:"1px solid #ccc"}}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;