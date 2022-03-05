import React from "react";
import './App.css';
import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
      <Route path='*' element={<HomePage/>}/>
    </Routes>
  );
}

export default App;
