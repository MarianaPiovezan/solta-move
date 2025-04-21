import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../../data/testimonials";

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      aria-label="Depoimentos de alunas"
      className="overflow-hidden py-16 "
    >
      <div className="flex px-6 flex-col gap-8 justify-center items-center text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-3xl md:text-5xl font-extrabold ">
          Resultados que vão muito além do espelho
        </h2>
        <p className="text-base md:text-lg text-brand-gray-700">
          Não é sobre um antes/depois. É sobre estar pronta para viver o agora,
          como se não houvesse amanhã.
        </p>
      </div>
      <div className="w-full h-auto  ml-6 lg:ml-[10%] relative">
        <Swiper
          className="mb-12 sm:block"
          modules={[Navigation, Pagination, Autoplay]}
          rewind={false}
          spaceBetween={48}
          slidesPerView={1.5}
          centeredSlides={false}
          navigation={{
            prevEl: "#testimonials .swiper-button-prev",
            nextEl: "#testimonials .swiper-button-next",
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet bg-como-participar-details",
          }}
          breakpoints={{
            520: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <figure>
                <div className="rounded-2xl md:rounded-3xl overflow-hidden mb-6 border border-brand-gray-100">
                  <img
                    className="w-full"
                    src={item.image}
                    alt={`Foto de ${item.name}`}
                  />
                </div>
                <blockquote className="text-brand-gray-700 text-base md:text-lg">
                  {item.part1}
                  <strong className="text-brand-dark font-bold">
                    {" "}
                    {item.part2}
                  </strong>
                  {item.part3}
                </blockquote>
                <figcaption className="font-extrabold border-t-2 border-brand-pink pt-1 mt-3 text-base md:text-lg">
                  {item.name}
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute !flex flex-row   !items-center justify-center gap-3  right-10 xl:right-[21%] ">
          <div
            className="swiper-button-prev !w-8 prev  !pl-1"
            role="button"
            aria-label="Depoimento anterior"
            tabIndex={0}
          />
          <div
            className="swiper-button-next !w-8 next  !pr-1"
            role="button"
            aria-label="Próximo depoimento"
            tabIndex={0}
          />
        </div>
      </div>
    </section>
  );
};
