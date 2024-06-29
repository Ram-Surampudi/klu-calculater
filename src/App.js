import React, { lazy } from "react";
import './Files/css/General.css';
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./Files/Home";
import Nav from "./Files/Nav";

const Ltps = lazy(() => import("./Files/Ltps"));
const ExpectedPer = lazy(() => import("./Files/ExpectedPer"));
const GeneralAttendence  = lazy(() => import("./Files/GeneralAttendence"));
const DecreaseAtt  = lazy(() => import("./Files/DecreaseAtt"));

function App() {

  return (
    <div>
      <Nav/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/ltps' element={<Ltps/>} />
        <Route path='/expected-percentage' element={<ExpectedPer/>} />
        <Route path='/attendence' element={<GeneralAttendence/>} />
        <Route path='/take-a-leave' element={<DecreaseAtt/>} />
        <Route path='/*' element={<Navigate to='/home'/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
