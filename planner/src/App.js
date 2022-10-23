// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Data from './Pages/Data'
import Home from './Pages/Home';
import Charts from './Pages/Charts';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/data' element={<Data/>} />
        <Route path='/charts' element={<Charts/>} />        
        {/* <Route path='/signin' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUpForm/>}/>
        <Route path='*' element={<NotFound/>}/> */}
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
};

export default App;
