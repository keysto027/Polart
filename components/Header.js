import Link from 'next/link'
import styles from './Header.module.css'
import Mobilestyles from './HeaderMobile.module.css'
import { useState } from "react";


export default function Header({ logoSrc  }) {
  return (
  

  
      <div class={styles.container}>
        <header className={styles.header}>

        <img src="/Logo.png" alt="Costa Norte" className={styles.logo} />
        <input type="checkbox" id={styles.check}></input>
        <label for="" className={styles.icons}>
            <i class='bx bx-menu' id={styles.menuicon}></i>
            <i class='bx bx-x' id={styles.closeicon}></i> 
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






