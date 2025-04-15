import React, { ReactNode } from 'react'

// This is the root layout for the application. It wraps all pages and components in the app directory. destructure the children and pass it to the div.
const RootLayout = ({children} :{children: ReactNode}) => {
  return (
    <div>{children}</div>
  )
}

export default RootLayout