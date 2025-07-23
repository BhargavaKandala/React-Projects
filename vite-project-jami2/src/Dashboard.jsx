import './Dashboard.css';
import FeatureBox from './box1';
import { useState } from 'react';

const sampleStudent = {
  imageUrl: 'https://via.placeholder.com/150/007bff/FFFFFF?text=Student+Image',
  name: 'Sree Bhargava',
  rollNo: '23A91A6124',
  branch: 'AIML',
  attendance_status: 'Present',
  Thub_status: 'Brathike Unnad Sir!!',
  FRS_Status: 'Present',
};

const features = [
  "Attendance",
  "Pool Data",
  "Mandatory Tests",
  "Fee"
];

export default function Dashboard() {
  const [studentIdInput, setStudentIdInput] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowDetails(true);
  };

  return (
    <>
      <main className="dashboard">
        <div className="content-boxes">
          {features.map((title) => (
            <FeatureBox key={title} title={title} />
          ))}
        </div>
      </main>

      <div className="StudentDetails">
        <div className="inputField">
          <form onSubmit={handleSubmit}>
            <label htmlFor="studentIdInput">Student Roll No.</label>
            <input
              id="studentIdInput"
              type="text"
              placeholder='Enter Roll No.'
              value={studentIdInput}
              onChange={(e) => setStudentIdInput(e.target.value)}
            />
            <button type="submit">Get Details</button>
          </form>
        </div>

        {showDetails && (
          <div className="student-details-container">
            <div className="student-photo">
              <img src={sampleStudent.imageUrl} alt="Student" />
            </div>
            <div className="student-info-display">
              <h2>Student Details </h2>
              
              <p><strong>Name: </strong> {sampleStudent.name}</p>
              <p><strong>Branch:</strong> {sampleStudent.branch}</p>
              <p><strong>Roll No:</strong> {sampleStudent.rollNo}</p>
              <p><strong>Attendance Status:</strong> {sampleStudent.attendance_status}</p>
              <p><strong>Thub Status:</strong> {sampleStudent.Thub_status}</p>
              <p><strong>F.R.S. Status:</strong> {sampleStudent.FRS_Status}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}