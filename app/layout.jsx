import Navbar from "../components/ui/Navbar"

import {Comic_Neue} from 'next/font/google'
 
import "./global.css" //abarca toda las paginas

export const metadata = {
  title: {
    template: '%s | Tienda Dash',
    default: 'Tienda Dash',
  },
  description: 'Tienda Online creada con nextjs'
};

const roboto = Comic_Neue({
  weight:["300","400","700"],
  styles:["italic","normal"],
  subsets:["latin"] 

})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className} >
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
