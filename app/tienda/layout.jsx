import Link from "next/link"

export const metadata = {
  title: {
    template: '%s | Tienda Dash',
    default:'Seccion Tienda'
  },
  description: 'Tienda Online creada con nextjs'
};

function TiendaLayout({children}) {
  return (
    <>

    <nav>
        <h3>Seccion Tienda</h3>
        <ul>
            <li> <Link href="/tienda/categorias">Categorias</Link> </li>
            <li> <Link href="/tienda/categorias/computadoras">Computadoras</Link> </li>
        </ul>
    </nav>
        {children}
    </>
  )
}

export default TiendaLayout