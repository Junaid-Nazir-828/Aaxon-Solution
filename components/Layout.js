import React from 'react';
import Nav from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className='main-container'>
    <Nav />
    { children }
    </div>
  )
}

export default Layout