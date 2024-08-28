import React from 'react';
import './App.css';
import AdminHeader from './components/AdminHeader';
import User from './pages/User';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/admin'element={<AdminHeader/>}></Route>
        <Route path='/shop' element={<User/>}></Route>
        <Route path='/'element={<HomePage/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
