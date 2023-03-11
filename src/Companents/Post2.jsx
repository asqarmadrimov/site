import React from 'react';
import { Link } from 'react-router-dom';
import card2 from '../Utils/image/card2.webp';
import img1 from '../Utils/image/stage1-img1.jpg';
import card3 from '../Utils/image/card3.webp'

const Post2 = () => {
  return (
    <div className='hero'>
      <hr className='w-75 mx-auto text-success d-block' style={{ height: '5px' }} />
      <div className="container-xxl">
        <div className='hero__list text-success d-flex justify-content-around flex-wrap'>
          <ul className="m-0 p-0">
            <li class="card mb-3 hero__card" style={{ maxWidth: '540px', }}>
              <div class="row g-2 p-1">
                <div class="col-md-5">
                  <img src={img1} className='img-fluid rounded-start' alt="" style={{ height: '100%', }} />
                </div>
                <div class="col-md-7">
                  <div class="card-body p-0">
                    <h5 class="card-title fw-semibold text-start">ГИГИЕНА ПОДРОСТКОВ</h5>
                    <p class="card-text">
                      Правильный уход за интимными зонами — важное условие женского здоровья в любом возрасте. На косметическом рынке много специальных продуктов,
                      но не все ими пользуются Давайте разберёмся...
                    </p>

                    <div className="text-end m-0 pe-1 pb-1">
                      <Link className='btn btn-outline-success mx-auto' to={"/lecture"}>Более</Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="card hero__card" style={{ maxWidth: '540px', }}>
              <div class="row g-2 p-1">
                <div class="col-md-5">
                  <img src={card2} className='img-fluid rounded-start m-auto' alt="" style={{ height: '100%', }} />
                </div>
                <div class="col-md-7">
                  <div class="card-body p-0">
                    <h5 class="card-title fw-semibold">МАТКА</h5>

                    <p class="card-text m-0">Внутренним половым органам как многим известно относится МАТКА. Это полый мышечный  орган расположенная в малом тазу. Матка состоит из :
                      - Влагалища-мышечная трубка длиной 7-10 см ведущая в полость матки
                      -шейка матки-суженное конец влагалище открывающаяся в полость матки
                      -Дно матки .
                    </p>

                    <div className="text-end m-0 pe-1 pb-1">
                      <Link className='btn btn-outline-success mx-auto' to={"/lecture"}>Более</Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <div class="card p-1 hero__card" style={{ maxWidth: "540px" }}>
            <img src={card3} className="card-img-top" alt="" style={{ maxHeight: '300px' }} />
            <div class="card-body m-0 p-1">
              <h5 className='card-title fw-semibold'>НЫНЕШНЯЯ ГЛОБАЛЬНАЯ СИТУАЦИЯ </h5>

              <p class="card-text">
                В 2008 г. было зарегистрировано 16 миллионов деторождений среди матерей в возрасте 15-19 лет, что составляет 11% от общего числа деторождений в мире.  Около 95% этих деторождений имели место в странах с низким и средн...
              </p>

              <Link className='btn btn-outline-success' to={"/lecture"}>Более</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Post2