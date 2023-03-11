import React from 'react';
import logo from '../Utils/image/siteLogo.jpg';
import GamburgerBtn from './GamburgerBtn';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header p-1'>
      <div className="container-xxl">
        <div className="header__inner d-flex align-items-center ">
          <Link className='header__logo' to="/">
            <img className='header__logo-img' src={logo} alt="siteLogo" width={'80'} height={'70px'}/>
          </Link>

          <h1 className='header__title fs-1 mx-auto font-monospace m-0 p-0'>
            Healthy Generation
          </h1>

          <GamburgerBtn />
        </div>
      </div>
    </header>
  )
}

export default Header