import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Pagination } from "swiper";
import { Link } from "react-router-dom";
import img1 from '../Utils/image/stage1-img1.jpg';
import img2 from '../Utils/image/swiper1.jpg';
import img3 from '../Utils/image/swiper2.jpg';
import img4 from '../Utils/image/swiper3.jpg';
import img5 from '../Utils/image/swiper4.jpg';
import img6 from '../Utils/image/swiper5.jpg';
import img7 from '../Utils/image/card3.webp';

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="card text-success swiper-card p-1" style={{ width: '18rem' }}>
            <img class="card-img-top" src={img1} width={300} height={200} />
            <div class="card-body">
              <h5 class="card-title">
                ГИГИЕНА ПОДРОСТКОВ
              </h5>

              <p class="card-text">
                Правильный уход за интимными зонами — важное условие женского здоровья в любом возрасте. На косметическом рынке много специальных продуктов, но не все ими пользуются...
              </p>

              <Link to="/lecture" class="btn btn-outline-success">Более</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card text-success swiper-card p-1" style={{ width: '18rem' }}>
            <img class="card-img-top" src={img2} width={300} height={200} />
            <div class="card-body">
              <h5 class="card-title">
                Предменструальный
              </h5>

              <p class="card-text">
                Предменструальный синдром-это комплекс симптомов которые проявляются у девушек и у женщин перед менструацией.Они вполне индивидуальны и проявляется у каждого по разному.
              </p>

              <Link to="/lecture2" class="btn btn-outline-success">Более</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card text-success swiper-card p-1" style={{ width: '18rem' }}>
            <img class="card-img-top" src={img3} width={300} height={200} />
            <div class="card-body">
              <h5 class="card-title">
                МАТКА
              </h5>

              <p class="card-text">
                Первое и самое главное,что должна знать каждая женщина это классическое строение своего полового органа.Не настолько глубоко как нам положено,как представители медицины...
              </p>

              <Link to="/lecture2" class="btn btn-outline-success">Более</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card text-success swiper-card p-1" style={{ width: '18rem' }}>
            <img class="card-img-top" src={img4} width={300} height={200} />
            <div class="card-body">
              <h5 class="card-title">
                МАТКА
              </h5>

              <p class="card-text">
                Внутренной слизистой-эндометрий,которая ежемесячно обновленяется за счёт менструации,а после опладотворения служит для образования плаценты плода.
              </p>

              <Link to="/lecture2" class="btn btn-outline-success">Более</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card text-success swiper-card p-1" style={{ width: '18rem' }}>
            <img class="card-img-top" src={img5} width={300} height={200} />
            <div class="card-body">
              <h5 class="card-title">
                ГИГИЕНА
              </h5>

              <p class="card-text">
                В фолликулярной фазе менструального цикла под действием ФСГ интенсивно развиваются примордиальные фолликулы до Граафовых один из яичников готовит ДОМИНАНТНЫЙ..
              </p>

              <Link to="/lecture" class="btn btn-outline-success">Более</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card text-success swiper-card p-1" style={{ width: '18rem' }}>
            <img class="card-img-top" src={img6} width={300} height={200} />
            <div class="card-body">
              <h5 class="card-title">
                МАТКА
              </h5>

              <p class="card-text">
                За это время пока созревает яйцеклетка матка готовит слой эдометрия для развития плода,в случае если происходит половой акт.Эндометрий состоит из базального и функционального слоя..
              </p>

              <Link to="/lecture2" class="btn btn-outline-success">Более</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card text-success swiper-card p-1" style={{ width: '18rem' }}>
            <img class="card-img-top" src={img7} width={300} height={200} />
            <div class="card-body">
              <h5 class="card-title">
                НЫНЕШНЯЯ ГЛОБАЛЬНАЯ СИТУАЦИЯ
              </h5>

              <p class="card-text">
                В 2008 г. было зарегистрировано 16 миллионов деторождений среди матерей в возрасте 15-19 лет, что составляет 11% от общего числа деторождений в мире...
              </p>

              <Link to="/lecture3" class="btn btn-outline-success">Более</Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
