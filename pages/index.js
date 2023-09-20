
import Head from 'next/head'

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
        <p className="tagline">
          ¡EN MANTENIMIENTO POR FAVOR ESPERE! 
        </p>
        
      </main>

      <Footer />
    </div>
  );
}

