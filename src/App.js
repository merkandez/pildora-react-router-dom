import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <hr />
      <Outlet/>
    </div>
  );
}

export default App;