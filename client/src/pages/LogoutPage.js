// Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove user data from localStorage
    localStorage.removeItem('user');

    // Delay redirect to /login so the UI (Navbar + message) is visible
    const timer = setTimeout(() => {
      navigate('/login');
    }, 1500); // 1.5 seconds delay

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="container mt-5 text-center">
        <h2 className="mb-3">Logging out...</h2>
        <p>You will be redirected shortly.</p>
        <div className="spinner-border text-primary mt-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default Logout;
