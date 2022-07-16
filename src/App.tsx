import React from 'react';
import './App.css';
import Slider from "./Slider";
import Nav from "./Nav";
import About from "./about";
import Gallery from "./gallery";
import Contact from "./Contact";
import ContactForm from "./ContactForm";

function App() {
  return (
    <div style={{marginBottom:"24px"}}>
      <Slider />
      <Nav/>
      <About/>
      <Gallery/>
      <Contact/>
      <ContactForm/>
    </div>
  );
}

export default App;
