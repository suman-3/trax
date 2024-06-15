import { Navbar } from '@/app/(marketing)/_components/navbar'
import React from 'react'

const ClerkAuthLayout = ({children}:{children: React.ReactNode}) => {
  return (
  <>
  <Navbar/>
  <div className='flex items-center justify-center w-full h-full pt-10 min-h-screen'>
      {children}
  </div>
  </>
  )
}

export default ClerkAuthLayout