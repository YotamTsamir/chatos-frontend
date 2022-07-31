import React, { useEffect } from 'react';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { AdminPage } from './pages/admin';
import { HashRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import './styles/main.scss'
import { AppHeader } from './cmps/appHeader';
import { Signup } from './pages/signup';
import { EditUser } from './pages/edit-user';
import { MyFriends } from './pages/my-friends';
import { MyMsgs } from './pages/my-msgs';

function App() {
  return (
    <Router>

      <header>
        <AppHeader />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/friendsList/:id' element={<MyFriends />} />
        <Route path='/myMsgs' element={<MyMsgs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/editUser/:id' element={<EditUser />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>

    </Router>
  );
}

export default App;
