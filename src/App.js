import React from 'react';
import NavBar from './components/NavBar.js';
import Hero from './components/Hero.js';
import './style.css';

export default function App() {
  return (
    <>
      <NavBar background={'transparent'} />
      <Hero title="Tu tienda de JORDANS"></Hero>
    </>
  );
}
