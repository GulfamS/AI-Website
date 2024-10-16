import {Component} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Features from "./component/Features";
import './App.css';

const App =()=>(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/features" element={<Features/>}/>
    </Routes>
  </BrowserRouter>
)

export default App;
