import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from "react-redux";
import Header from './components/Header/Header';
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./Container/Home";

import Appoimentlist from "./components/Appoimentlist/Appoimentlist";
import UpdatedocForm from "./components/Updateform/Updateform";

import Login from "./components/Login/Login";
import { Doctorlist } from './components/Doctorlist/Doctorlist';

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLogin);

  return (
   
      <>
        {isLoggedIn ? (
          <>
            <div className="page-wrapper">
              <Header />
            </div>
            <Sidebar />
            <div className="page-body"> 
            <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/patients-appointment" element={<Appoimentlist />} />
          <Route path="/updateform/:adminId" element={<UpdatedocForm />} />
          {/* <Route path="/doclist" element={<Doctorlist />} /> */}
         
        </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            {/* <Route path="/signup" element={<Signup />} /> */}
          </Routes>
        )}
      </>
   
  );
}

export default App;
