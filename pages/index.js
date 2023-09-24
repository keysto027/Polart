
import Head from 'next/head'
import react from "react";
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Costa Norte</title>
        <link rel="icon" href="/Costa.ico" />
      </Head>
      <main>

      <div className="container1">
          <div class= "imgBx"> 
            <img src="/recepcion.gif"></img>
        </div>
      </div>

       <div className="container2">
         <div className="content2">
           <img  className="img1"  src="/reloj.gif"></img>
           <h2>SERVICIO 24/7</h2> 
           <h3>Horario</h3>
        </div>

       

        <div className="content3">
          <img className="llamada" src="/llamada.gif"></img>
          <h2>Telefono</h2>
          <h3>+1 809-584-3939</h3>
        </div>

        <div className="content4" href="/Nosotros">
          <img className="ubicacion" src="/ubicacion.gif"></img>
          <h2>Ubicacion</h2>
          <h3>Ave. María Trinidad Sánchez No.1</h3>
          <h4>Nagua - Rep. Dom.</h4>
        </div>
       </div>
       
       
       <div className="content">
          <h2>Costa Norte</h2>
          <p>Brindando Atencion Medica Desde 1996</p>
          <div className="buttoms">
            <a className="Consultas" href="Consultas">Consultas</a>
            <a className="Resultados"href="Resultados">Resultados</a>  
          </div>
        </div>
        

       

      
     
        <Header logoSrc="/Logo.png" />
    

      </main>
     
      <Footer />
    </div>
  );
}

