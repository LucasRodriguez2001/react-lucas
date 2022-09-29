import React from 'react';
import ItemListContainer from './ItemListContainer.js';
import './styles/Hero.css';

const HeroStore = ({ title }) => {
  return (
    <section className="hero hero-slide-1">
      <div className="hero-container">
        <article className="hero-container__text-box">
          <h1>{title}</h1>
          <p>
            ¡La mejor tienda donde encontrar esas zapatillas que tanto te gustan!
          </p>
          <ItemListContainer gretting={'Carrito'}></ItemListContainer>
        </article>
      </div>
    </section>
  );
};

export default HeroStore;
