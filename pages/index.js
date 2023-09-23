
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
       <div className="container2"></div>
       
       
       <div className="content">
          <h2>Costa Norte</h2>
          <p>Brindando atencion medica de 1996</p>
        </div>
        <div class= "imgBx"> 
        <img src="/ccnLogo.png"></img>
        </div>

        <div className="content2">
           <img  className="img1"  src="/reloj.png"></img>
           <h2>estamos disponibles las 24 horas</h2> 
        </div>

       

      
     
        <Header logoSrc="/Logo.png" />
    

      </main>
     
      <Footer />
    </div>
  );
}

