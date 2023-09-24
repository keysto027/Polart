// Importa los módulos necesarios
import Head from 'next/head';
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '@styles/nosotros.module.css'

// Componente de la página Novedades
export default function _404() {
  return (
 
 <div>

  <main>
    <Header logoSrc="/Logo.png" />
    <div className={styles.container1}>
    <h1>404 ERROR |Pagina no encontrada</h1>
  </div>
  </main>
    <Footer/>
 </div>
    
  );
}