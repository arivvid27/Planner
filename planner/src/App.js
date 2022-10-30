// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Data from './Pages/Data/Data'
import Home from './Pages/Home';
import Charts from './Pages/Charts/Charts';
import NotFound from './Pages/404/404.jsx';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/data' element={<Data/>} />
        <Route path='/charts' element={<Charts/>} />  
        <Route
        path="/"
        element={<Navigate to="/home" replace />}
        />      
        <Route path='*' element={<NotFound/>}/>
        {/* <Route path='/signin' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUpForm/>}/>*/}

      </Routes>
    </Router>
  );
};

export default App;
