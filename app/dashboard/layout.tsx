import { Header } from '@/components/Header'
import React from 'react'

const DashboardLayout = ({ children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    
    <>
      <Header/>
      {children}
    </>
   
  )
}

export default DashboardLayout
