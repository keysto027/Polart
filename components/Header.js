import Link from 'next/link'
import styles from './Header.module.css'

export default function Header({ logoSrc  }) {
  return (
    // <div>
    //   <header className={styles.header}>
    //     <div>

    //     </div>
    //   </header>
      
      
    //   <nav className={styles.nav}>
    //   <img src="/Logo.png" alt="Costa Norte" className={styles.logo} />
    //     <Link href="/">
    //       <a className={styles.navlink}>Inicio</a>
    //     </Link>
    //     <Link href="/Nosotros">
    //       <a className={styles.navlink}>Nosotros</a>
    //     </Link>
    //     <Link href="/Novedades">
    //       <a className={styles.navlink}>Novedades</a>
    //     </Link>

      
    //     <Link href="/servicios">
    //       <a className={styles.navlink}>Servicios</a>
         
    //     </Link>
      
    //     <Link href="/empleo">
    //       <a className={styles.navlink}>Empleo</a>
    //     </Link>
    //     <Link href="/servicios">
    //       <a className={styles.navlink}>Servicios</a>
    //     </Link>
    //     <Link href="/Sucursales">
    //       <a className={styles.navlink}>Sucursales</a>
    //     </Link>
    //     <Link href="/Contacto">
    //       <a className={styles.navlink}>Contacto</a>
    //     </Link>
    //     <Link href="/Resultados">
    //       <a className={styles.navlink}>Resultados</a>
    //     </Link>
    //   </nav>
    // </div>

    <section className={styles.section}>
      <div class={styles.container}>
        <header className={styles.header}>
        <img src="/Logo.png" alt="Costa Norte" className={styles.logo} />
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Novedades</a></li>
              <li><a href="#">Sucursales</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Empleo</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
        </header>
      </div>
    </section>
  
    

  );
}



