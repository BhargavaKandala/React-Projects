import { useContext, React } from 'react';
import Link from 'react-router-dom';

export default function Home() {
  return (
    <>
        <div className='Header'>
          <div>Add Data</div>
          <div>View Data</div>
        </div>
        <Link to="/Home">Go to Home</Link>
    </>
  )
}