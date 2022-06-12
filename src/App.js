import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Profile from './pages/profile';
import ErrorPage from "./pages/error";
import Counter from "./pages/counter";
import {useDispatch, useSelector} from 'react-redux';
import {navActiveActions} from './store/index';
import { useCallback, useEffect, useState } from "react";


function App() {
  

  const navActionReduxState = useSelector((state) => state.navActive);
  



  return (
    <>
      <div className="App"> Hello World!</div>
      <Router>
        <nav>
          <Link to="/" 
            
            className={`${navActionReduxState.activePage == 'home' ? 'active': ''}`} 
            >Home</Link>&nbsp;
          <Link 
            
            className={`${navActionReduxState.activePage == 'about' ? 'active': ''}`} 
            to="/about">About</Link>&nbsp;
          <Link 
          
          className={`${navActionReduxState.activePage == 'profile' ? 'active': ''}`} 
          to="/profile/htoo_mg_thait">Profile</Link>&nbsp;
          <Link 
          
          className={`${navActionReduxState.activePage == 'counter' ? 'active': ''}`} 
          to="/counter">Counter</Link>&nbsp;
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <div> Foooter </div>
      </Router>
    </>
  );
}

export default App;
