import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <img src="/POLART.png" alt="Polart Logo" className={styles.logo} />
          <p className={styles.text}>
            <span>
              Copyright © 2023 Polart Estudio - Todos los derechos
              reservados.
            </span>
          </p>
        </div>
      </footer>
    </>
  )
}
