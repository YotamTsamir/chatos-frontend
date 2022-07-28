import React, { useEffect } from 'react';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { HashRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import './styles/main.scss'
import { AppHeader } from './cmps/appHeader';
import { Signup } from './pages/signup';

function App() {
  return (
      <Router>

      <header>
        <AppHeader />
      </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>

      </Router>
  );
}

export default App;
