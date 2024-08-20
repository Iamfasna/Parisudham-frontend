import React from 'react';
import './App.css';
import AdminHeader from './components/AdminHeader';
import User from './pages/User';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/admin'element={<AdminHeader/>}></Route>
        <Route path='/' element={<User/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
