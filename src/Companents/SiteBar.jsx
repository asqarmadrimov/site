import React from 'react';
import { Link } from 'react-router-dom';
import ford from '../Utils/ford/5-6 классы лекция.pdf'
import ford2 from '../Utils/ford/лекции 7-8 классов.pdf'
import ford3 from '../Utils/ford/Лекции 9-10-11 классов.pdf'

function Navbar() {
  return (
    <section className='nav p-3 font-monospace'>
      <div className="dropdown w-25 text-center">
        <a className="btn btn-outline-success fs-3 w-100 px-5 py-2 dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Этап-1
        </a>

        <ul className="dropdown-menu">
          <li><a href={ford} className="dropdown-item">Лекция</a></li>
          <li><Link className="dropdown-item" to={'/rolik'}>Ролик</Link></li>
          <li><Link className="dropdown-item" to={"/lecture"}>Раздаточные материалы</Link></li>
        </ul>
      </div>

      <div className="dropdown w-25">
        <a className="btn btn-outline-success fs-3 w-100 px-5 py-2 dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Этап-2
        </a>

        <ul className="dropdown-menu">
          <li><a href={ford2} className="dropdown-item">Лекция</a></li>
          <li><Link className="dropdown-item" to={'/rolik2'}>Ролик</Link></li>
          <li><Link className="dropdown-item" to={"/lecture2"}>Раздаточные материалы</Link></li>
        </ul>
      </div>

      <div className="dropdown w-25">
        <a className="btn btn-outline-success fs-3 w-100 px-5 py-2 dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Этап-3
        </a>

        <ul className="dropdown-menu">
          <li><a href={ford3} className="dropdown-item">Лекция</a></li>
          <li><Link className="dropdown-item" to={'/rolik3'}>Ролик</Link></li>
          <li><Link className="dropdown-item" to={"/lecture3"}>Раздаточные материалы</Link></li>
        </ul>
      </div>


    </section>
  )
}

export default Navbar