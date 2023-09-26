
import Head from 'next/head';
import React, { useEffect } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Swiper from 'swiper/bundle';

export default function Home() {
  useEffect(() => {
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }, []); 


  return (
    <section className="section">
      <div className="container">
        <Head>
          <title>Costa Norte</title>
          <link rel="icon" href="/Costa.ico" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"/>
          <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
        </Head>
        <main>
          <div className="container1">
            <div className="imgBx">
              <img src="/recepcion.gif" alt="Recepción" />
            </div>
          </div>


      <div class="swiper mySwiper">

        <div class="swiper-wrapper">

          <div class="swiper-slide">
            <img src="cirugia.jpg" />
          </div>

          <div class="swiper-slide">
            <img src="consulta-medica.jpg" />
          </div>

          <div class="swiper-slide">
            <img src="imagenes-medicas.jpg" />
          </div>

          <div class="swiper-slide">
            <img src="servicios-laboratorio.jpg" />
          </div>

          <div class="swiper-slide">
            <img src="UCI.jpg" />
          </div>

          <div class="swiper-slide">
            <img src="UCIN.jpg" />
          </div>

        </div>

        <div class="swiper-pagination"></div>
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
