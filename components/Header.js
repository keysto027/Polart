import Link from 'next/link'

export default function Header({ title }) {
  return (
    <div>
      <h1 className="title">{title}</h1>
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
        <Link href="/servicios">
          <a className="nav-link">Servicios</a>
        </Link>
      </nav>
    </div>
  );
}
