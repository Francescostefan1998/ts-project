import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import FetchComponent from './components/FetchComponent';
import MyNavbar from './components/MyNavbar';
import DetailComponent from './components/DetailComponent';
import { useState } from "react"
import { Information } from './types';
function App() {
  const [information, setInformation] = useState<Information>()
  return (
    <BrowserRouter>
    <div className="App">
      <MyNavbar />
      <header className="App-header">
        <Routes>
          <Route path='/' element={<FetchComponent />}/>
          <Route path='/detail/:elementId' element={<DetailComponent/>}/>

        </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
