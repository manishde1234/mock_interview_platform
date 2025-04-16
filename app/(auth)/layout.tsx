import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'

const AuthLayout = async ({children}:{children: ReactNode}) => {
  // This is the layout for the authentication pages. It wraps all pages in the auth directory. destructure the children and pass it to the div. const isUserAuthenticated = await isAuthenticated();
  
       const isUserAuthenticated = await isAuthenticated();
      
            if(isUserAuthenticated) redirect('/');
  return (
    <div className='auth-layout'>{children}</div>
  )
}

export default AuthLayout