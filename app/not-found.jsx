import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function NotFound() {
  return (
    <>
        {/* <h1>404</h1> */}
        <Link href="/" >
        <Image src="/Error_Image.jpg" width="600" height="600" />
        </Link>
        
        
    </>
  )
}

export default NotFound