import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/login">Go to Login</Link>
    </div>
  );
}

export default HomePage;
