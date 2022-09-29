import React from 'react';
import NavBar from './components/NavBar.js';
import HeroStore from './components/HeroStore.js';
import './style.css';

export default function store() {
  return (
    <>
      <NavBar background={'transparent'} />
      <HeroStore title="Tienda"></HeroStore>
    </>
  );
}