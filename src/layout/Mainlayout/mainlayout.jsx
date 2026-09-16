import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../component/footer/Footer';
import Navbar from '../../component/navbar/Navbar';

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;