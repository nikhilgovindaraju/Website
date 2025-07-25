// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )


// main.jsx — CLEANED UP
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import 'devicon/devicon.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
