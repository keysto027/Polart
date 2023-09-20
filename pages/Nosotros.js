// Importa los módulos necesarios
import Head from 'next/head';
import Header from '@components/Header'
import Footer from '@components/Footer'

// Componente de la página Nosotros
export default function Nosotros() {
  return (
    <div className="container">
      <Head>
        <title>Nosotros - COSTA NORTE</title>
        <link rel="icon" href="/Costa.ico" />
      </Head>

      <main>
      <Header logoSrc="/Logo.png" />
        <div className="fondo">

          <section className="nosotros">
            <h1>Sobre Nosotros</h1>
            <h2>NUESTROS INICIOS</h2>
            <p>
            El 14 de enero de 1996 comenzó a laborar el Centro de Especialidades Médicas Costa Norte, ubicado para ese entonces en la Calle Miguel José No. 21 de Nagua, Provincia María Trinidad Sánchez, República Dominicana.
            Los médicos unidos en ese proyecto, ya eran médicos conocidos por sus condiciones de especialistas, aferrados a la ética profesional, con 5 o más años laborando en la región. La constancia de los servicios médicos prestados, hicieron que el Centro se convirtiera en el lugar de referencia de los demás centros de salud de la región, lo cual inmediatamente nos convirtió en un centro médico de atención regional; quedando nuestra institución con la responsabilidad de recibir y asistir los problemas de salud desde Gaspar Hernández hasta las Galeras de Samaná y la zona baja del Yuna, incluyendo Villa Riva y Arenoso; aun perteneciendo éstas, geográficamente a San Francisco de Macorís.
            Por estas razones, los principales hoteles turísticos y empresas de la región le solicitaron a sus compañías aseguradoras de salud, afiliar nuestro Centro Médico a sus servicios, por considerar que en nuestra institución cuenta con el servicio más óptimo de la región, para la atención de empleados y huéspedes.
            El crecimiento alcanzado por la institución trajo consigo un problema: espacio físico. Es aquí donde entendimos que la construcción de un moderno edificio, era una necesidad imperiosa. Siendo así las cosas, construimos una moderna infraestructura, ubicada en una vía de fácil acceso, tanto para los que vienen desde Gaspar Hernández, Río San Juan y Cabrera, como los que vienen de Samaná, Las Terrenas y Sánchez; de igual forma los que proceden de Villa Riva, Arenoso y todo el extenso Yuna.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
