import React from "react";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Homepage from "./Pages/Homepage";
import Mission from "./Pages/Mission";
import Programs from "./Pages/Programs";
import {HashRouter, Route, Routes } from "react-router-dom";
import Cancerinng from "./Pages/Cancerinng";
import Mentorship from "./Pages/Mentorship";
import Opportunities from "./Pages/Opportunities";


function App() {
  return (
    <HashRouter>
    <div className="">
     <Routes> 
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/mission' element={<Mission/>}/>
        <Route path='/programs' element={<Programs/>}/>
        <Route path='/cancerinng' element={<Cancerinng/>}/>
        <Route path='/mentorship' element={<Mentorship/>}/>
        <Route path='/opportunities' element={<Opportunities/>}/>

        </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
