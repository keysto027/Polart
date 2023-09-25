
import Head from 'next/head';
import React, { useEffect } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Swiper from 'swiper/bundle';

export default function Home() {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: false,
      },
    });
  }, []); // Agrega los [] para que useEffect solo se ejecute una vez

  return (
    <section className="section">
      <div className="container">
        <Head>
          <title>Costa Norte</title>
          <link rel="icon" href="/Costa.ico" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
          />
        </Head>
        <main>
          <div className="container1">
            <div className="imgBx">
              <img src="/recepcion.gif" alt="Recepción" />
            </div>
          </div>

          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">Slide 1</div>
              <div className="swiper-slide">Slide 2</div>
              <div className="swiper-slide">Slide 3</div>
            </div>

            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-scrollbar"></div>
          </div>

          <div className="container2">
            <div className="content2">
              <img className="img1" src="/reloj.gif" alt="Reloj" />
              <h2>SERVICIO 24/7</h2>
              <h3>Horario</h3>
            </div>

            <div className="content3">
              <img className="llamada" src="/llamada.gif" alt="Llamada" />
              <h2>Telefono</h2>
              <h3>+1 809-584-3939</h3>
            </div>

            <div className="content4" href="/Nosotros">
              <img
                className="ubicacion"
                src="/ubicacion.gif"
                alt="Ubicación"
              />
              <h2>Ubicacion</h2>
              <h3>Ave. María Trinidad Sánchez No.1</h3>
              <h4>Nagua - Rep. Dom.</h4>
            </div>
          </div>

          <div className="content">
            <h2>Costa Norte</h2>
            <p>Brindando Atencion Medica Desde 1996</p>
            <div className="buttoms">
              <a className="Consultas" href="Consultas">
                Consultas
              </a>
              <a className="Resultados" href="Resultados">
                Resultados
              </a>
            </div>
          </div>

          <Header logoSrc="/Logo.png" />
        </main>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
      <Footer />
    </section>
  );
}
