import React from 'react'
import Header from './header'
import { Outlet } from 'react-router'
import Footer from './footer'

export default function Components() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
