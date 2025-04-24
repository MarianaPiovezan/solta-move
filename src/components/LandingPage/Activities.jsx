import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { activities1, activities2 } from "../../data/activities";
import { app } from "../../data/app";

export const Activities = () => {
  return (
    <section
      id="activities"
      aria-label="Fique por dentro da plataforma"
      className="overflow-hidden py-12 md:py-16  "
    >
      <div className="flex px-6 flex-col gap-8 justify-center items-center text-center max-w-2xl mx-auto mb-6 md:mb-8">
        <h2 className="text-3xl md:text-5xl font-extrabold ">
          Encontre o treino que mexe com você.
        </h2>
      </div>
      <div className="container-margin px-6 xl:px-0 flex flex-col md:flex-row gap-8 h-full items-stretch">
        <div className="bg-brand-gray-100 p-6 md:p-12 rounded-2xl   md:rounded-3xl text-brand-gray-800 text-lg md:text-xl  md:w-1/2 ">
          <p>
            {" "}
            <strong className="text-brand-dark">
              Treinos fora do padrão para você descobrir sua modalidade do
              coração.
            </strong>{" "}
            Se aquele que faz seu coração bater mais forte, que te tira o
            fôlego, que te coloca pra cima. Ou aquele que te abraça, te acalma e
            te relaxa. Com um montão de modalidades de exercícios disponíveis é
            impossível não encontrar pelo menos um para chamar de seu. Então, a
            partir de agora,{" "}
            <strong className="text-brand-dark">
              não se surpreenda se você começar a ficar animada pelo próximo
              treino.
            </strong>
          </p>
        </div>
        <div className="bg-brand-gray-100 py-6 md:py-12 rounded-2xl  md:rounded-3xl text-brand-gray-700 text-lg md:text-xl md:w-1/2  ">
          <Swiper
            className="sm:block mb-6 md:mb-8"
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={2.5}
            spaceBetween={24}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            grabCursor={false}
            navigation={{
              prevEl: "#activities .swiper-button-prev",
              nextEl: "#activities .swiper-button-next",
            }}
            breakpoints={{
              468: {
                slidesPerView: 3.5,
              },
              768: {
                slidesPerView: 2.5,
              },
              1000: {
                slidesPerView: 3.5,
              },
            }}
          >
            {activities1.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <figure key={index}>
                  <div className="rounded-2xl md:rounded-3xl overflow-hidden mb-2   bg-brand-gray-100 relative flex items-center justify-center ">
                    <img className="" src={item.image} alt={` ${item.title}`} />
                  </div>

                  <figcaption className="text-brand-dark font-bold text-sm  md:text-[15px] text-center leading-none">
                    {item.title}
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            className=" sm:block"
            modules={[Navigation, Pagination, Autoplay]}
            rewind={false}
            spaceBetween={24}
            slidesPerView={2.5}
            loop={true}
            speed={2800}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            grabCursor={false}
            centeredSlides={true}
            navigation={{
              prevEl: "#activities .swiper-button-prev",
              nextEl: "#activities .swiper-button-next",
            }}
            breakpoints={{
              468: {
                slidesPerView: 3.5,
              },
              768: {
                slidesPerView: 2.5,
              },
              1000: {
                slidesPerView: 3.5,
              },
            }}
          >
            {activities2.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <figure key={index}>
                  <div className="rounded-2xl md:rounded-3xl overflow-hidden mb-2   bg-brand-gray-100 relative flex items-center justify-center ">
                    <img className="" src={item.image} alt={` ${item.title}`} />
                  </div>

                  <figcaption className="text-brand-dark font-bold text-sm  md:text-[15px] text-center leading-none">
                    {item.title}
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <h3 className="text-2xl md:text-3xl container-margin py-6 md:py-8 font-extrabold px-6  xl:px-0">
        Você é única. <br />
        Sua maneira de se mover também.
      </h3>
      <div
        id="activities-app"
        className="container-margin h-auto px-6 xl:px-0    relative  mx-auto  pr-0 overflow-visible"
      >
        <Swiper
          className="mb-12 sm:block !overflow-hidden"
          modules={[Navigation, Pagination, Autoplay]}
          rewind={false}
          spaceBetween={24}
          slidesPerView={1.5}
          centeredSlides={false}
          navigation={{
            prevEl: "#activities-app .swiper-button-prev",
            nextEl: "#activities-app .swiper-button-next",
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet bg-como-participar-details",
          }}
          breakpoints={{
            520: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween:48
            },
            1200: {
              slidesPerView: 4,
              spaceBetween:48
            },
          }}
        >
          {app.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <figure key={index}>
                <div className="rounded-2xl md:rounded-3xl overflow-hidden mb-6   bg-brand-gray-100 relative flex items-center justify-center py-14">
                  <img
                    className="w-28"
                    src={item.image}
                    alt={` ${item.highlight}`}
                  />
                </div>

                <figcaption className="text-brand-gray-700 pt-1 mt-3 text-sm md:text-base">
                  <strong className="text-brand-dark">{item.highlight}</strong>{" "}
                  {item.part1}{" "}
                  <strong className="text-brand-dark">{item.part2}</strong>{" "}
                  {item.part3}
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute !flex flex-row   !items-center justify-center gap-3  right-6 xl:right-0 !mt-4">
          <div
            className="swiper-button-prev !w-8 prev  !pl-1"
            role="button"
            aria-label="Anterior"
            tabIndex={0}
          />
          <div
            className="swiper-button-next !w-8 next  !pr-1"
            role="button"
            aria-label="Próximo"
            tabIndex={0}
          />
        </div>
      </div>
    </section>
  );
};
