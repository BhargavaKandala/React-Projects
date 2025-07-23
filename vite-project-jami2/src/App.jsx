import { useState } from 'react';
import Login from './Login';
import Header from './Header';
import Dashboard from './Dashboard';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'root' && password === '1234') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };


  let content;
  if (isLoggedIn) {
    content = (
      <>
        <Header onLogout={handleLogout} />
        <Dashboard />
      </>
    );
  } else {
    content = <Login onLogin={handleLogin} />;
  }

return <>{content}</>;
}