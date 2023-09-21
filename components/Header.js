import Link from 'next/link'
import styles from './Header.module.css'

export default function Header({ logoSrc  }) {
  return (
    <div>
      <header className={styles.header}>
      <img src="/Logo.png" alt="Costa Norte" className={styles.logo} />

      </header>
      
      
      <nav className="nav">
        <Link href="/">
          <a className="nav-link">Inicioa</a>
        </Link>
        <Link href="/nosotros">
          <a className="nav-link">Nosotros</a>
        </Link>
        <Link href="/Novedades">
          <a className="nav-link">Novedades</a>
        </Link>
        <Link href="/empleo">
          <a className="nav-link">Empleo</a>
        </Link>
        <Link href="/servicios">
          <a className="nav-link">Servicios</a>
          
        </Link>
      </nav>
    </div>

  
    

  );
}



