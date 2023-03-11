import React from 'react'

function Carusel() {
  return (
      <div className="container-fuld">
        <div id="carouselExampleIndicators" class="carousel slide rounded w-100 mx-auto" data-bs-ride="true">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>

            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>

          <div className="carousel-inner rounded-3 my-3">
            <div class="carousel-item active carusel-item-1">
              <h2 className='fs-2 text-title1 fw-bold'>
                Healthy
                <span className='text-info'> Generation</span>
              </h2>

              <p className='fs-6 text-masseg1'>
                Здоровый <span className='text'> образ жизни</span>
              </p>
            </div>

            <div class="carousel-item carusel-item-2">
              <h2 className='fs-2 text-title2 fw-bold'>
                Healthy Generation
              </h2>

              <p className='fs-6 text-masseg2'>
                Укрепление здорового поколения
              </p>
            </div>
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">

            <span class="carousel-control-prev-icon" aria-hidden="true"></span>

            <span class="visually-hidden">Previous</span>

          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">

            <span class="carousel-control-next-icon" aria-hidden="true"></span>

            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
  )
}

export default Carusel