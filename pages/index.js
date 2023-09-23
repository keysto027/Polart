
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
       <p>Brindando atencion medica de</p>
       </div>
       <Header logoSrc="/Logo.png" />

       <div className="content">
          <h2>Costa Norte</h2>
          <p>Brindando atencion medica de</p>
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

