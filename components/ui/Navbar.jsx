import Link from "next/link"

import "./styles/Navbar.css"

function Navbar() {
    return (
        <nav className="navbar py-5" >
            <h1 className="text-3xl font-bold" ><Link href="./">NEXT JS - NAVBAR</Link> </h1>
            <ul>
                <li><Link href="/">Home</Link> </li>
                <li><Link href="/about" >About</Link></li>
                <li><Link href="/tienda" >Tienda</Link></li>
                <li><Link href="/posts" >See Posts</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar