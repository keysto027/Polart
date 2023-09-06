/*import Head from 'next/head'
import Link from 'next/link'
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
      <button className="cta-button">Comenzar</button>
        <Header title="POLART" />
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
        <p className="tagline">
          ¡EN MANTENIMIENTO POR FAVOR ESPERE!
        </p>
        
      </main>

      <Footer />
      <style jsx>{`
       
       .nav {
        display: flex;
      }

      .nav-link {
        color: #000000; /* Color del texto de los enlaces de navegación 
        text-decoration: none;
        margin-right: 20px;
        font-size: 15px;
        font-weight: bold;
        background-color: rgb(255, 187, 0);
        border: none;
        border-radius: 25px;
        cursor: pointer;

        .nav-link:hover {
          background-color: rgb(69,104,196);
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
          background-color: rgb(255, 187, 0); /* Cambia el color aquí 
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
*/
import Head from 'next/head'
import Link from 'next/link'
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
        
        <div className="header-and-button">
          <Header title="POLART.V2          " style={{ float: 'left', marginRight: '50px' }} />
          
        

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

        </div>
        
        <p className="tagline">
          ¡EN MANTENIMIENTO POR FAVOR ESPERE!

        </p>
        <button className="cta-button">Comenzar</button>
      </main>

      <Footer />
      <style jsx>{`
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
          background-color: rgb(255, 187, 0); 
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .cta-button:hover {
          background-color: rgb(69, 104, 196);
        }

        .header-and-button {
          width: 100%;
          height: 150px;
          border-top: 1px solid #000000;
          display: flex;
          padding: 100%;
          align-items: center;
          background-color:  rgb(235, 26, 26);;
        
        }

        .nav {
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
        }

        .nav-link {
          color: #000000;
          text-decoration: none;
          margin-right: 20px;
          padding: 10px 15px;
          font-size: 15px;
          font-weight: bold;
          background-color: rgb(230, 171, 11);
          border: none;
          border-radius: 25px;
          cursor: pointer;
        }

        .nav-link:hover {
          background-color: rgb(69, 104, 196);
        }
      `}</style>
    </div>
  )
}
