import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <img src="/Logo.png" alt="Costa Norte" className={styles.logo} />
          <p className={styles.text}>
            <span>
              Copyright © 2023 Costa Norte - Todos los derechos
              reservados.
            </span>
          </p>
        </div>
      </footer>
    </>
  )
}
