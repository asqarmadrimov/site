import React from 'react'

function Footer() {
  return (
    <footer className='footer text-success p-1 ps-2'>
      <div className="container-xxl">
        <div className="footer__inner">
          <b>
            <a href="email" className='text-decoration-none text-success fs-6 fw-semibold'>
              @womesbady
            </a> <br />

            <a className='text-decoration-none fs-6 font-monospace text-success d-flex align-items-center justify-content-start' href="tel:+998 99 381 15 51 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
              <u>+998 99 381 15 51</u>
            </a>

            <strong className='fs-6 font-monospace'>Koxna Khiva 166, City Khiva.</strong>
          </b>
        </div>
      </div>
    </footer>
  )
}

export default Footer