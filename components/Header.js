import { useState } from 'react'; // Importa useState desde React
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header({ logoSrc }) {
  const [showServicesMenu, setShowServicesMenu] = useState(false); // Estado para controlar la visibilidad del menú

  // Función para mostrar u ocultar el menú al pasar el mouse sobre "Servicios"
  const handleServicesMenuToggle = () => {
    setShowServicesMenu(!showServicesMenu);
  };

  return (
    <div>
      <header>
        <img src="/Logo.png" alt="Costa Norte" className={styles.logo} />
      </header>
      
      <nav className="nav">
        <Link href="/">
          <a className="nav-link">Inicio</a>
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
        {/* Agrega un evento onMouseEnter para mostrar el menú al pasar el mouse */}
        <div className={styles.nav-services} onMouseEnter={handleServicesMenuToggle}>
          <a className="nav-link">Servicios</a>
          {/* Utiliza la variable showServicesMenu para mostrar u ocultar el menú */}
          {showServicesMenu && (
            <ul className={styles.services-dropdown}>
              <li>
                <Link href="/medicos-especialistas">
                  <a className="nav-link">Médicos especialistas</a>
                </Link>
              </li>
              <li>
                <Link href="/pacientes-internacionales">
                  <a className="nav-link">Pacientes internacionales</a>
                </Link>
              </li>
              <li>
                <Link href="/salud-en-tu-hogar">
                  <a className="nav-link">Salud en tu hogar</a>
                </Link>
              </li>
              <li>
                <Link href="/imagenes-medicas">
                  <a className="nav-link">Imágenes Médicas</a>
                </Link>
              </li>
              <li>
                <Link href="/laboratorio-clinico">
                  <a className="nav-link">Laboratorio Clínico</a>
                </Link>
              </li>
              <li>
                <Link href="/resultados-en-linea">
                  <a className="nav-link">Resultados en línea</a>
                </Link>
              </li>
              <li>
                <Link href="/ver-todos">
                  <a className="nav-link">Ver todos</a>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}
