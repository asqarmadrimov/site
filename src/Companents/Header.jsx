import React from 'react';
import logo from '../Utils/image/siteLogo.jpg';
import GamburgerBtn from './GamburgerBtn';

function Header() {
  return (
    <header className='header p-1'>
      <div className="container-xxl">
        <div className="header__inner d-flex align-items-center ">
          <a className='header__logo me-2' href="/public/index.html">
            <img className='header__logo-img' src={logo} alt="siteLogo" width={'80'} height={'70px'}/>
          </a>

          <h1 className='header__title fs-1 mx-auto font-monospace'>
            Healthy Generation
          </h1>

          <GamburgerBtn />
        </div>
      </div>
    </header>
  )
}

export default Header