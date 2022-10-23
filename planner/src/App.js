// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';

import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/browse' element={<Browse/>} />
        <Route path='/about' element={<About/>} />        
        <Route path='/signin' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUpForm/>}/>
        <Route path='*' element={<NotFound/>}/> */}
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
};

export default App;
