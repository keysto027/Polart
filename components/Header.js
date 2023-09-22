import Link from 'next/link'
import styles from './Header.module.css'

export default function Header({ logoSrc  }) {
  return (
    <div>
      <header className={styles.header}>
        <div>

        </div>
      </header>
      
      
      <nav className={styles.nav}>
      <img src="/Logo.png" alt="Costa Norte" className={styles.logo} />
        <Link href="/">
          <a className={styles.navlink}>Inicio</a>
        </Link>
        <Link href="/Nosotros">
          <a className={styles.navlink}>Nosotros</a>
        </Link>
        <Link href="/Novedades">
          <a className={styles.navlink}>Novedades</a>
        </Link>
<<<<<<< HEAD
=======
        
        <Link href="/servicios">
          <a className={styles.navlink}>Servicios</a>
          <div className={styles.submenu}>
          
            <Link href="/servicios/servicio1">
              <a className={styles.submenuLink}>Servicio 1</a>
            </Link>
            <Link href="/servicios/servicio2">
              <a className={styles.submenuLink}>Servicio 2</a>
            </Link>

          </div>
        </Link>
        
>>>>>>> parent of 077ae17 (Update Header.js)
        <Link href="/empleo">
          <a className={styles.navlink}>Empleo</a>
        </Link>
        <Link href="/servicios">
          <a className={styles.navlink}>Servicios</a>
        </Link>
        <Link href="/Sucursales">
          <a className={styles.navlink}>Sucursales</a>
        </Link>
        <Link href="/Contacto">
          <a className={styles.navlink}>Contacto</a>
        </Link>
        <Link href="/Resultados">
          <a className={styles.navlink}>Resultados</a>
        </Link>
      </nav>
    </div>

  
    

  );
}



