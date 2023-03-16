import React from 'react';
import { Link } from 'react-router-dom'

function GamburgerBtn() {
  return (
    <div className='gamBtn'>
      <button class="gamBtn__btn btn btn-outline-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="bi bi-filter-right" viewBox="0 0 16 16">
          <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z" />
        </svg>
      </button>

      <div class="offcanvas offcanvas-end" tabindex="+1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div className="gamBtn__Stage">
            <div className="dropdown w-100 text-center">
              <a className="btn btn-outline-success fs-3 w-100 px-5 py-2 dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Этап-1
              </a>

              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={"/lecture"}>Лекция</Link></li>
                <li><Link className="dropdown-item" to={'/rolik'}>Ролик</Link></li>
                <li><Link className="dropdown-item" to={"/lecture"}>Раздаточные материалы</Link></li>
              </ul>
            </div>

            <div className="dropdown w-100  my-2">
              <a className="btn btn-outline-success fs-3 w-100 px-5 py-2 dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Этап-2
              </a>

              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={"/lecture2"}>Лекция</Link></li>
                <li><Link className="dropdown-item" to={'/rolik2'}>Ролик</Link></li>
                <li><Link className="dropdown-item" to={"/lecture2"}>Раздаточные материалы</Link></li>
              </ul>
            </div>

            <div className="dropdown w-100">
              <a className="btn btn-outline-success fs-3 w-100 px-5 py-2 dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Этап-3
              </a>

              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={"/lecture3"}>Лекция</Link></li>
                <li><Link className="dropdown-item" to={'/rolik3'}>Ролик</Link></li>
                <li><Link className="dropdown-item" to={"/lecture3"}>Раздаточные материалы</Link></li>
              </ul>
            </div>
          </div>
          <hr />

          <a href="#videoRolik" className='btn btn-outline-success fs-2 w-100 py-2'>
            Видео уроки
          </a>

          <hr />

          <a href="#post" className='btn btn-outline-success fs-3 w-100 py-2'>
            Марафон
          </a>

          <hr />

          <a href="#post" className='btn btn-outline-success fs-3 w-100 py-2'>
            Лекция
          </a>

          <hr />

          <a href="#videoRolik" className='btn btn-outline-success fs-3 w-100 py-2'>
            Раздаточные материалы
          </a>
        </div>
      </div>
    </div>
  )
}

export default GamburgerBtn