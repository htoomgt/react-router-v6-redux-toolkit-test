import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Profile from './pages/profile';
import ErrorPage from "./pages/error";
import Counter from "./pages/counter";
import PersonRegister from "./pages/PersonRegister";
import FetchApiData from "./pages/fetchApiData";
import {useDispatch, useSelector} from 'react-redux';
import {navActiveActions} from './store/index';
import { useCallback, useEffect, useState } from "react";


function App() {
  

  const navActionReduxState = useSelector((state) => state.navActive);
  



  return (
    <>
      <h2 className="main-title">React Router V6 and React Redux with React Toolkit Tutorial</h2>
      <Router>
        <nav>
          <Link to="/" 
            
            className={`${navActionReduxState.activePage == 'home' ? 'active': ''}`} 
            >Home</Link>
          <Link 
            
            className={`${navActionReduxState.activePage == 'about' ? 'active': ''}`} 
            to="/about">About</Link>
          <Link 
          
          className={`${navActionReduxState.activePage == 'profile' ? 'active': ''}`} 
          to="/profile/htoo_mg_thait">Profile</Link>
          <Link           
          className={`${navActionReduxState.activePage == 'counter' ? 'active': ''}`} 
          to="/counter">Counter</Link>

          <Link           
            className={`${navActionReduxState.activePage == 'api-fetch-data' ? 'active': ''}`} 
          to="/api-fetch-data">API Fetch Data</Link>

          <Link           
            className={`${navActionReduxState.activePage == 'person-register' ? 'active': ''}`} 
          to="/person-register">Person Register</Link>

        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/api-fetch-data" element={<FetchApiData />} />
          <Route path="/person-register" element={<PersonRegister />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <div> Foooter </div>
      </Router>
    </>
  );
}

export default App;
