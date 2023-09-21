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
          <a className={styles.navlink}>Inicio</a>
        </Link>
        <Link href="/Nosotros">
          <a className={styles.navlink}>Nosotros</a>
        </Link>
        <Link href="/Novedades">
          <a className={styles.navlink}>Novedades</a>
        </Link>
        <Link href="/empleo">
          <a className={styles.navlink}>Empleo</a>
        </Link>
        <Link href="/servicios">
          <a className={styles.navlink}>Servicios</a>
          
        </Link>
      </nav>
    </div>

  
    

  );
}



