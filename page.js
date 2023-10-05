




"use client"
import React, { useState } from 'react'
import Header from '../../Component/Header';
import Body from '../../Component/Body';
import Footer from '../../Component/Footer';

const page = () => {
  const [user, set] = useState("Omkar");
  
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

export default page
