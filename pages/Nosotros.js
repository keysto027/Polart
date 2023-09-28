// Importa los módulos necesarios
import Head from 'next/head';
import Header from '@components/Header'
import Footer from '@components/Footer'
import react from "react";
import styles from '@styles/nosotros.module.css'


// Componente de la página Nosotros
export default function Nosotros() {
  return (
  <section className={styles.section}>
     <div>
      <Head>
        <title>Nosotros - COSTA NORTE</title>
        <link rel="icon" href="/Costa.ico" />
      </Head>
      
      <main>
      
       <div className={styles.container1}>

            <div class={styles.imgBx}> 
            <img src="/personaje.png"></img>
            </div>
       </div>

      <Header logoSrc="/Logo.png" />
        
          <section className={styles.nosotros}>
          
          </section>
        

        <div className={styles.imgbx1}>
               <img src="/seccion2.jpg"></img>
        </div>
      </main>
      </div>
      <Footer />
    

    </section>
  );
 
}
