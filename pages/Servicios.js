import Head from 'next/head';
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '@styles/Servicios.module.css'

export default function Servicios() {
    return (
    <section className={styles.section}>
       <div>
        <Head>
          <title>Servicios - COSTA NORTE</title>
          <link rel="icon" href="/Costa.ico" />
        </Head>
        
        <main>
         <Header logoSrc="/Logo.png" />
          
        <div className="container1">
          <h1>Nuestros Servicios</h1>
          <h2>
          El Centro de Especialidades Médicas Costa Norte,
          nace el 14 de enero de 1996 como una institución comprometida con la salud y el bienestar
          de nuestros pacientes y del público en general; ofreciendo servicios de calidad,
          amparados en la más estrictas normas médicas, ética profesional y calor humano.
          </h2>


        </div>
          
  
          
        </main>
        </div>
        <Footer/>
      
  
      </section>
    );
   
  }
  