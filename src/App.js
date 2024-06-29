import React, { lazy } from "react";
import './Files/css/General.css';
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import Home from "./Files/Home";
import Nav from "./Files/Nav";
import DecreaseAtt from "./Files/DecreaseAtt";
import GeneralAttendence from "./Files/GeneralAttendence";
import Ltps from "./Files/Ltps";
import ExpectedPer from './Files/ExpectedPer';



function App() {

  return (
    <div>
      <Nav/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ltps' element={<Ltps/>} />
        <Route path='/expected-percentage' element={<ExpectedPer/>} />
        <Route path='/attendence' element={<GeneralAttendence/>} />
        <Route path='/take-a-leave' element={<DecreaseAtt/>} />
        <Route path='/*' element={<Navigate to='/'/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
