// App.js
import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Register from './components/register/register';
import Login from './components/login/login';
import Profile from './components/profile/profile';
import Home from './components/home/home';

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});

  const fetchUserProfile = useCallback(async () => {
    if (token) {
      try {
        const response = await axios.get('http://localhost:9000/api/accounts/profile/', {
          headers: { Authorization: `Token ${token}` },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    }
  }, [token]);

  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/profile" element={token ? <Profile user={user} /> : <Navigate to="/login" />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;


// // import logo from './logo.svg';
// import './App.css';
// import React, { useState, useEffect } from 'react';
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import axios from 'axios';
// import Register from './components/register/register';
// import Login from './components/login/login';
// import Profile from './components/profile/profile';
// import Home from './components/home/home';


// function App() {
//   const [token, setToken] = useState(null);
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       if (token) {
//         try {
//           const response = await axios.get('http://localhost:9000/api/accounts/profile/', {
//             headers: { Authorization: `Token ${token}` },
//           });
//           setUser(response.data);
//         } catch (error) {
//           console.error("Error fetching user profile:", error);
//         }
//       }
//     };

//   // Call fetchUserProfile whenever the token changes
//     fetchUserProfile();
//   }, [token]); // Only depend on token
//   return (
//     <Routes>
//       <Route path="/register" element={<Register />} />
//       <Route path="/login" element={<Login setToken={setToken} />} />
//       <Route path="/profile" element={token ? <Profile user={user} /> : <Navigate to="/login" />} />
//       <Route path="/" element={<Home />} />
//     </Routes>
//   );
//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //       </a>
//   //     </header>
//   //   </div>
//   // );
// }

// export default App;
