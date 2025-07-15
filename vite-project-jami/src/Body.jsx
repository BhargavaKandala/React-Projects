import React, { useState } from 'react';
import './Body.css';

export default function Body(){
  const [rollNo, setRollNo] = useState('');

  const handleInputChange = (e) => {
    setRollNo(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitted Roll No:", rollNo);
  };

  return (
    <>
        <main className="main-body">
        <form action="submit">
            <input
              type="text"
              className="roll-input"
              placeholder="Enter Roll No."
              value={rollNo}
              onChange={handleInputChange}
            />
            <button className="submit-btn" onClick={handleSubmit}>Submit</button>
        </form>
                </main>  
    </>
  );
};
