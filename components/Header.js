import Link from 'next/link'
import styles from './Header.module.css'

export default function Header({ logoSrc  }) {
  return (
    <div>
      <header className={styles.header}>
      <img src="/Logo.png" alt="Costa Norte" className={styles.logo} />

      </header>
      
      
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.nav-Link}>Inicio</a>
        </Link>
        <Link href="/Nosotros">
          <a className={styles.nav-Link}>Nosotros</a>
        </Link>
        <Link href="/Novedades">
          <a className={styles.nav-Link}>Novedades</a>
        </Link>
        <Link href="/empleo">
          <a className={styles.nav-Link}>Empleo</a>
        </Link>
        <Link href="/servicios">
          <a className={styles.nav-Link}>Servicios</a>
          
        </Link>
      </nav>
    </div>

  
    

  );
}



