import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hooter from './components/Footer';
import React from 'react';


function App() {
  return (
    <>
      <Header />
      <Outlet/>
      <Hooter/>
    </>
  );
}

export default App;
