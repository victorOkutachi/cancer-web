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
import Blogone from "./Pages/Blogone";
import Blogtwo from "./Pages/Blogtwo";
import ScrollToTop from "./components/ScrollToTop";
import Donate from "./Pages/Donate";
import Privacy from "./Pages/Privacy";





function App() {
  return (
    <HashRouter>

    <div className="">
      <ScrollToTop/>
     <Routes> 
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/mission' element={<Mission/>}/>
        <Route path='/programs' element={<Programs/>}/>
        <Route path='/cancerinng' element={<Cancerinng/>}/>
        <Route path='/mentorship' element={<Mentorship/>}/>
        <Route path='/opportunities' element={<Opportunities/>}/>
        <Route path='/blogone' element={<Blogone/>}/>
        <Route path='/blogtwo' element={<Blogtwo/>}/>
        <Route path='/donate' element={<Donate/>}/>
        <Route path='/privacy' element={<Privacy/>}/>

        </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
