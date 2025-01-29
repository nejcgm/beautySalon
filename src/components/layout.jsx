import { Outlet } from "react-router-dom";
import Navigation from "./navigation";
import Wraper from "./wraper";
import React from 'react'
import Footer from "./footer";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Wraper>
        <Outlet/>
      </Wraper>
      <Footer/>

      
    </div>
  )
}

export default Layout
