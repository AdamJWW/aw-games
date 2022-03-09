import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReviewList from './ReviewList';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/reviews" element={<App/>}/>
      <Route path="/reviews/:categoryName" element={<ReviewList/>}/>
    </Routes>
    </BrowserRouter>


  </React.StrictMode>,
  document.getElementById('root')
);