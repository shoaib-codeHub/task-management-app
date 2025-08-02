import React from 'react';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="text-center">
          <h1 className="display-4">Welcome to Task Manager</h1>
          <p className="lead">Manage your tasks efficiently and stay productive.</p>
        </div>
      </div>
    </>
  );
}

export default Home;
