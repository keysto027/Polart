
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
       <div className="container1"></div>
       <div className="container2">
       
<<<<<<< HEAD
       <div className="content2">
      
=======
       
       <div className="content">
          <h2>Costa Norte</h2>
          <p>Brindando atencion medica de 1996</p>
          <div className="buttoms">
            <a className='Consultas' href="/Consulas">Consultas</a>
            <a className="Resultados" href="/Resultados">Resultados</a>
          </div>
        </div>
        <div class= "imgBx"> 
        <img src="/recepcion.gif"></img>
        </div>

        <div className="content2">
>>>>>>> eee3e83e58d9ffa31b8a5d1107b2be84a4276180
           <img  className="img1"  src="/reloj.gif"></img>
           <h2>SERVICIO 24/7</h2> 
           <h3>Horario</h3>
        </div>

        <div className="content3">
          <img className="llamada" src="/llamada.gif"></img>
          <h2>Telefono</h2>
          <h3>+1 809-584-3939</h3>
        </div>

        <div className="content4">
          <img className="ubicacion" src="/ubicacion.gif"></img>
          <h2>Telefono</h2>
          <h3>+1 809-584-3939</h3>
        </div>

       </div>
       
       
       <div className="content">
          <h2>Costa Norte</h2>
          <p>Brindando atencion medica desde 1996</p>
        </div>
        <div class= "imgBx"> 
        <img src="/ccnLogo.png"></img>
        </div>

       

      
     
        <Header logoSrc="/Logo.png" />
    

      </main>
     
      <Footer />
    </div>
  );
}

