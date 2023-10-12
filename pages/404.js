// Importa los módulos necesarios
import Head from 'next/head';
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '@styles/nosotros.module.css'

// Componente de la página Novedades
export default function _404() {
  return (
 
 <section className={styles.section}>

  <div>
  <Head>
          <title>Costa Norte</title>
          <link rel="icon" href="/Costa.ico" />
        </Head>
  <main>

    <div className={styles.container1}>
    
    <h1>404 ERROR |Pagina no encontrada</h1>
  </div>
  <Header logoSrc="/Logo.png" />
  </main>
    
  </div>
  <Footer/>
 </section>
    
  );
}
