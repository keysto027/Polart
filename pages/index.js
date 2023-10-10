
import Head from 'next/head';
import React, { useEffect } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Swiper from 'swiper/bundle';


export default function Home() {
 
  useEffect(() => {
    var swiper = new Swiper(".mySwiper", {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      loop: true,
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

          <div className="content">
            <h2>Costa Norte</h2>
            <p>Brindando Atencion Medica Desde 1996</p>
            <div className="buttoms">
              <a className="Consultas" href="https://clinicacostanorte.probeta.com/">
                Laboratorio Medico
              </a>
              <a className="Resultados" href="http://costanorte.radiologox.com/App/#/login">
                Resultados Imagenes
              </a>
            </div>
          </div>
      
          <div className="container2">

              <div className="tittle">

                  <h2></h2>

              </div>

            <div className="content2">
              <img className="img1" src="/facebook.png" alt="Reloj" />
              
            </div>
            <div className="content3">
              <img className="llamada" src="/instagram.png" alt="Llamada" />
              
            </div>
            <div className="content4" href="/Nosotros">
              <img className="ubicacion" src="/youtube.png" alt="Ubicación"/>
              
            </div>
          </div>
        
         <div className="container3">
            <div class="swiper mySwiper">
              <div class="swiper-wrapper">
                
                <div class="swiper-slide">  <img src="Resultados.jpg" /> <div className="swiper-text"> <h2>Resultados</h2> </div> </div>
                <div class="swiper-slide">  <img src="consulta-medica.jpg" /> <div className="swiper-text"> <h2>Conculta Medica</h2> </div> </div>
                <div class="swiper-slide">  <img src="laboratorio.jpg" />  <div className="swiper-text"> <h2>Laboratorio</h2> </div> </div>
                <div class="swiper-slide">  <img src="farmacia.jpg" />  <div className="swiper-text"> <h2>Farmacia</h2> </div> </div>
              
              </div>
            </div>
          </div>

          <div className="container4">

            
            <img className="ccn" src="ccnLogo.png"></img>
            <h2>Sobre Nosotros</h2>
            <p>El 14 de enero de 1996 comenzó a laborar el Centro de Especialidades Médicas Costa Norte, ubicado para ese entonces en la Calle Miguel José No. 21 de Nagua, Provincia María Trinidad Sánchez, República Dominicana.</p>

          </div>

            
      

          <Header logoSrc="/Logo.png" />
        </main>
      </div>
      <Footer />
      <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
      
    </section>
  );
}
