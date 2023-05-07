// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import './lib/animate/animate.min.css'
import './lib/lightbox/css/lightbox.min.css'
import './lib/owlcarousel/assets/owl.carousel.min.css'
import './css/bootstrap.min.css'
import './css/style.css'

import Carousel from './components/Carousel';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Features />
      <About />
      <Services />
    </div>
  );
}

export default App;
