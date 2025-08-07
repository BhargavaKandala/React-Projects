import { useState } from 'react';
import './Dashboard.css';

function FeatureBox({ title }) {
  return (
    <div className="feature-box">
      <h3 className="feature-title">{title}</h3>
    </div>
  );
}

const sampleStudent = {
  imageUrl: 'https://placehold.co/150x150/007bff/FFFFFF?text=Student+Image',
  name: 'Sree Bhargava',
  rollNo: '23A91A6124',
  branch: 'AIML',
  attendance_status: 'Present',
  Thub_status: 'Brathike Unnad Sir!!',
  FRS_Status: 'Present!',
};

const features = [
  "Attendance",
  "Pool Data",
  "Mandatory Tests",
  "Fee"
];

export default function App() {
  const [studentIdInput, setStudentIdInput] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowDetails(true);
  };

  return (
    <div className="app-container">
      <h1 className="main-title">Student Dashboard</h1>
      <main className="dashboard-main">
        <div className="feature-boxes-container">
          {features.map((title) => (
            <FeatureBox key={title} title={title} />
          ))}
        </div>
      </main>

      <div className="main-content-area">
        <div className="input-field-container">
          <form onSubmit={handleSubmit} className="input-form">
            <label htmlFor="studentIdInput" className="input-label">Student Roll No.</label>
            <input
              id="studentIdInput"
              type="text"
              className="input-text-field"
              placeholder='Enter Roll No.'
              value={studentIdInput}
              onChange={(e) => setStudentIdInput(e.target.value)}
            />
            <button
              type="submit"
              className="submit-button"
            >
              Get Details
            </button>
          </form>
        </div>

        {showDetails && (
          <div className="student-details-card">
            <div className="details-card-content">
              <div className="student-photo-container">
                <img src={sampleStudent.imageUrl} alt="Student" className="student-photo" />
              </div>
              <div className="student-info-display">
                <h2 className="details-title">Student Details</h2>
                <p className="detail-item"><strong>Name:</strong> {sampleStudent.name}</p>
                <p className="detail-item"><strong>Branch:</strong> {sampleStudent.branch}</p>
                <p className="detail-item"><strong>Roll No:</strong> {sampleStudent.rollNo}</p>
                <p className="detail-item"><strong>Attendance Status:</strong> {sampleStudent.attendance_status}</p>
                <p className="detail-item"><strong>Thub Status:</strong> {sampleStudent.Thub_status}</p>
                <p className="detail-item"><strong>F.R.S. Status:</strong> {sampleStudent.FRS_Status}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
