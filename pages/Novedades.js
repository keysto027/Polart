// Importa los módulos necesarios
import Head from 'next/head';
import Header from '@components/Header'
import Footer from '@components/Footer'

// Componente de la página Novedades
export default function Novedades() {
  return (
    <div className="container">
      <Head>
        <title>Novedades - COSTA NORTE</title>
        <link rel="icon" href="/Costa.ico" />
      </Head>

      <main>
      <Header />
        <div className="fondo">
       

          <section className="novedades-section">
            <h1>Novedades</h1>
            <div className="novedad">
              
            </div>
            <div className="novedad">
              
            </div>
            {/* Puedes agregar más novedades aquí */}
          </section>
        </div>
      </main>
      <Footer />
    
    </div>
  );
}
