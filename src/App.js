import React from 'react';
import './App.css';
import PreNavbar from './Components/PreNavbar';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom'; 
import Slider from "./Components/Slider.jsx"
import data from "./Data/data.json";
import Offers from "./Components/Offers.js"
import Heading from "./Components/Heading.jsx"
import StarProduct from "./Components/StarProduct.jsx"


function App() {


  return (
    <Router >
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCT" />
      <StarProduct StarProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />

    </Router>
  );
}
export default App;
