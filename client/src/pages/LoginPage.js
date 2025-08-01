import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div>
      <h2>Login Page</h2>
      <Link to="/tasks">Go to Task Page</Link>
    </div>
  );
}

export default LoginPage;
