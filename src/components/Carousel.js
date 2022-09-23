import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import jordan1 from '../images/jordan1.jpg';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          style={ { height : 500, margin : 'auto'}}
          src="https://cdn.shopify.com/s/files/1/0609/3016/2861/products/eds-store-sneakersAir_Jordan_1_Mid_Diamond_Shorts-DH6933-100-0_2000x.png?v=1644840015"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>AIR JORDAN 1 MID DIAMOND</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={ { height : 500, margin : 'auto' }}
          src="https://cdn.shopify.com/s/files/1/0609/3016/2861/products/eds-store-sneakersAir_Jordan_4_Retro_Red_Thunder-CT8527-016-0_2000x.png?v=1643628536"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>AIR JORDAN 4 RETRO</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={ { height : 500, margin : 'auto' }}
          src="https://cdn.shopify.com/s/files/1/2358/2817/products/air-jordan-4-zen-master.png?v=1645700627"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>AIR JORDAN 4 ZEN MASTER</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;