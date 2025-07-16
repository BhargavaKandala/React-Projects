import React, { useState } from 'react';
import './Body.css';

export default function Body() {
  const [rollNo, setRollNo] = useState('');

  const handleInputChange = (e) => {
    setRollNo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Roll No:", rollNo);
    setRollNo('');
  };

  return (
    <main className="main-body">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="roll-input"
          placeholder="Enter Roll No."
          value={rollNo}
          onChange={handleInputChange}
        />
        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </main>
  );
}