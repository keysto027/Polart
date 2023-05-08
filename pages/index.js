import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Polart Estudio!</title>
        <link rel="icon" href="/POLART.ico" />
      </Head>
      <main>
      <img src="/POLARTb.jpg" alt="carga" className="carga" />
        <Header title="WELCOME " />
        <p className= "tania">
        NUEVO MUNDO 
        </p>
        <p>
              Esto es Polart Estudio<code>pages/Mantenimiento</code>
            
       

        </p>
      </main>

      <Footer />
    </div>
  )
}
