// Importa los módulos necesarios
import Head from 'next/head';
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Main } from 'next/document';

// Componente de la página Novedades
export default function _404() {
  return (
<main>

<Header logoSrc="/Logo.png" />
<div>
                <h1>404 ERROR |Pagina no encontrada</h1>
              </div>
</main>
    
  )}