import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>POLART ESTUDIOS</title>
        <link rel="icon" href="/POLART.ico" />
      </Head>
      <main>
        <Header title="POLART" />
        <p className="tagline">
          ¡EN MANTENIMIENTO POR FAVOR ESPERE!
        </p>
        <button className="cta-button">Comenzar</button>
      </main>

      <Footer />
      <style jsx>{`
import Link from 'next/link'; // Importa el módulo Link para la navegación

export default function Header({ title }) {
  return (
    <header className="header">
      <div className="logo">{title}</div>
      <nav className="nav">
        <Link href="/">
          <a className="nav-link">Inicio</a>
        </Link>
        <Link href="/nosotros">
          <a className="nav-link">Nosotros</a>
        </Link>
        <Link href="/sugerencias">
          <a className="nav-link">Sugerencias</a>
        </Link>
        <Link href="/empleo">
          <a className="nav-link">Empleo</a>
        </Link>
        <Link href="/servicios">
          <a className="nav-link">Servicios</a>
        </Link>
      </nav>
    </header>
  );
}


       
       .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: #000;
          color: #fff;
        }

        .tagline {
          font-size: 24px;
          margin-top: 20px;
          text-align: center;
        }

        .cta-button {
          margin-top: 40px;
          padding: 15px 30px;
          font-size: 20px;
          font-weight: bold;
          background-color: rgb(255, 187, 0); /* Cambia el color aquí */
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .cta-button:hover {
          background-color: rgb(69,104,196);
        }
      `}</style>
    </div>
  )
}


/////////////////////////////////

/*
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Polart Estudio!</title>
        <link rel="icon" href="/POLART.ico" />
      </Head>
      <main>
      <img src="/POLARTb.jpg" alt="carga" className="carga" />
        <Header title="WELCOME " />
        <p className= "tania">
        NUEVO MUNDO 
        </p>
        <p>
              Esto es Polart Estudio<code>pages/Mantenimiento</code>
            
       

        </p>
      </main>

      <Footer />
    </div>
  )
}
*/