
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
       <Header logoSrc="/Logo.png" />

       <div className="wrp">
          <div className="portada"></div>
          <div className="contenido">
            <div className="info">
              <div>
                
              </div>
            </div>
          </div>
       </div>

      
      </main>
     
      <Footer />
    </div>
  );
}

