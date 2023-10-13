import React, { useState } from "react";
import styles from './Header.module.css';

export default function Header({ logoSrc }) {
  const [isChecked, setIsChecked] = useState(false); // Define isChecked y su función de actualización

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Actualiza el valor de isChecked al cambiar el checkbox
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="/Logo.png" alt="Costa Norte" className={styles.logo} />
        <input
          type="checkbox"
          id={styles.check}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor={styles.check} className={styles.icons}>
          <i className={`bx ${isChecked ? styles.closeicon : styles.menuicon}`}></i>
        </label>
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