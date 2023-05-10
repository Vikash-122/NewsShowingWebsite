import React, { useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  const [darkMode, setdarkMode] = useState(false);
  const toggleDarkMode=()=>{
    setdarkMode(!darkMode);
  }
  const pageSize=5;
  const country = "us";
    return (
      <div>
        <Router>
          <NavBar darkMode = {darkMode} toggleDarkMode = {toggleDarkMode} />
          <Routes>
            <Route index element={<News key="general" pageSize = {pageSize} country={country} category="general"darkMode={darkMode}/>} />
            <Route path="/business" element={<News key="business" pageSize = {pageSize} country={country} category="business"darkMode={darkMode}/>} />
            <Route path="/technology" element={<News key="technology" pageSize = {pageSize} country={country} category="technology"darkMode={darkMode}/>} />
            <Route path="/sports" element={<News key="sports" pageSize = {pageSize} country={country} category="sports"darkMode={darkMode}/>} />
            <Route path="/science" element={<News key="science" pageSize = {pageSize} country={country} category="science"darkMode={darkMode}/>} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize = {pageSize} country={country} category="entertainment"darkMode={darkMode}/>} />
            <Route path="/health" element={<News key="health" pageSize = {pageSize} country={country} category="health"darkMode={darkMode}/>} />
            <Route path="/form" element={<Form/>} />
          </Routes>
        </Router>
      </div>
    )
}

