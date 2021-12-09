import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Register from './components/Register';
import Login from './components/Login';
import News from './components/News';
import Header from './components/Header';
import './App.scss';

const App = () => {
  return (
    <div>
      <React.Fragment>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/news" element={<News/>} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
