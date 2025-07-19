import './Header.css';

export default function Header({ onLogout }) {
  return (
    <header className="header">
      <h1 className="logo">Attendance Dashboard</h1>
      <div className="header-actions">
        <button className="download-btn">Download Report</button>
        <button className="logout-btn" onClick={onLogout}>Logout</button>
      </div>
    </header>
  );
}
  