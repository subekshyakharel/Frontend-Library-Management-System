import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const DefaultLayout = ({children}) => {
  return (
    <>
    {/* navbar  */}
    <Header/>

    {/* main  */}
    <main className="main">
    <Outlet/>
    </main>

    {/* footer  */}
    <Footer/>
    </>
  )
}

export default DefaultLayout