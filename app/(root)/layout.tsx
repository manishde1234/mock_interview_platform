import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

// This is the root layout for the application. It wraps all pages and components in the app directory. destructure the children and pass it to the div.
const RootLayout = ({children} :{children: ReactNode}) => {
  return (
    <div className='root-layout'>
      <nav>
        <Link href="/" className='flex items-center gap-2'>
        <Image src="/logo.svg" alt='logo' width={38} height={32}/>
        <h2 className='text-primary-100'>PrepWise</h2>
        </Link>
      </nav>

      {children}
    </div>
  )
}

export default RootLayout