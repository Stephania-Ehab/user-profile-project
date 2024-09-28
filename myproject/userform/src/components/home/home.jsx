import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome To Home Page</h1>
      <Link to="/register">
        <button style={{ marginRight: '10px', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>Sign Up</button>
      </Link>
      <Link to="/login">
        <button style={{ padding: '10px', backgroundColor: '#008CBA', color: 'white', border: 'none', borderRadius: '5px' }}>Sign In If you already have an account</button>
      </Link>
      <Link to="/profile">
        <button style={{ padding: '10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}>Profile</button>
      </Link>
    </div>
  );
};

export default Home;
