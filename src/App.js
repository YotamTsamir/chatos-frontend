import React, { useEffect, useState } from 'react';
import { socketService, SOCKET_EMIT_SET_TOPIC, SOCKET_EVENT_SEND_MSG } from './services/socket.service';
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
import { AppFooter } from './cmps/app-footer';
import { ActionSent } from './cmps/action-sent';
import { Socket } from 'socket.io-client';
import { useSelector } from 'react-redux';

function App() {
  const { user } = useSelector((storeState) => storeState.userModule)
  const [action, setAction] = useState(false)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    socketService.emit(SOCKET_EMIT_SET_TOPIC, 'all')
    socketService.off(SOCKET_EVENT_SEND_MSG);
    socketService.on(SOCKET_EVENT_SEND_MSG, actionSend);
    return () => {
      socketService.off(SOCKET_EVENT_SEND_MSG, actionSend)

    }

  }, [])

  const actionSend = (ev) => {
    console.log(ev.length);
    if (ev.friend === user._id) {
      setMsg(`${ev.miniUser.fullname} had added you as a friend!`)
    }
    else if (ev.id) setMsg('Got new messege!')
    else return
    setAction(true)
    setTimeout(() => {
      setAction(false)
    }, 1000)
  }

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
      {action && <ActionSent msg={msg} />}
      <footer>
        <AppFooter />
      </footer>
    </Router>
  );
}

export default App;
