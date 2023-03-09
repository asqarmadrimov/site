import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='nav p-3 font-monospace'>
      <div className="dropdown w-25 text-center">
        <a className="btn btn-outline-success fs-3 w-100 px-5 py-2 dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Этап-1
        </a>

        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to={"/lecture"}>Лекция</Link></li>
          <li><Link className="dropdown-item" to={'/rolik'}>Ролик</Link></li>
          <li><Link className="dropdown-item" to={"/material"}>Разговорный материал</Link></li>
        </ul>
      </div>

      <div className="dropdown w-25">
        <a className="btn btn-outline-success fs-3 w-100 px-5 py-2 dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Этап-2
        </a>

        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to={"/lecture"}>Лекция</Link></li>
          <li><Link className="dropdown-item" to={'/rolik'}>Ролик</Link></li>
          <li><Link className="dropdown-item" to={"/material"}>Разговорный материал</Link></li>
        </ul>
      </div>

      <div className="dropdown w-25">
        <a className="btn btn-outline-success fs-3 w-100 px-5 py-2 dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Этап-3
        </a>

        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to={"/lecture"}>Лекция</Link></li>
          <li><Link className="dropdown-item" to={'/rolik'}>Ролик</Link></li>
          <li><Link className="dropdown-item" to={"/material"}>Разговорный материал</Link></li>
        </ul>
      </div>


    </nav>
  )
}

export default Navbar