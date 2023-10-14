
import styles from './Header.module.css'



export default function Header({ logoSrc  }) {
  return (



      <div class={styles.container}>
        <header className={styles.header}>

        <img src="/Logo.png" alt="Costa Norte" className={styles.logo} />
        
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/Nosotros">Nosotros</a></li>
              <li><a href="/Servicios">Servicios</a></li>
              <li><a href="/Novedades">Novedades</a></li>
              <li><a href="/Empleo">Empleo</a></li>
              <li><a href="/Contacto">Contacto</a></li>
            </ul>
        </header>
      </div>






  );
}





