import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../../data/testimonials";
import { motion } from "motion/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Testimonials = () => {

  
  return (
    <section
      id="testimonials"
      aria-label="Depoimentos de alunas"
      className="overflow-hidden pt-12 md:pt-16 "
    >
      <div className="flex px-6 flex-col gap-8 justify-center items-center text-center max-w-2xl mx-auto mb-8">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold"
          // initial={{ opacity: 0, y: 20 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1 }}
          // viewport={{ once: true }}
        >
          Resultados que vão muito além do espelho
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-brand-gray-700"
          // initial={{ opacity: 0, y: 30 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1.2, delay: 0.3 }}
          // viewport={{ once: true }}
        >
          Não é sobre um antes/depois. É sobre estar pronta para viver o agora,
          como se não houvesse amanhã.
        </motion.p>
      </div>

      <motion.div
        className="container-margin h-auto px-6 xl:px-0 relative mx-auto pr-0 overflow-visible"
        // initial={{ opacity: 0, y: 50 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 1 }}
        // viewport={{ once: true }}
      >
        <Swiper
          className="mb-12 sm:block !overflow-visible"
          modules={[Navigation, Pagination, Autoplay]}
          rewind={false}
          spaceBetween={24}
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
            520: { slidesPerView: 2 },
            768: { slidesPerView: 2.5, spaceBetween: 48 },
            1200: { slidesPerView: 3, spaceBetween: 48 },
            1400: { slidesPerView: 3, spaceBetween: 48 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <figure>
                <div className="rounded-2xl md:rounded-3xl overflow-hidden mb-6 border border-brand-gray-100 aspect-3/4">
                  <LazyLoadImage
                    src={item.image}
                    alt={`Foto de ${item.name}`}
                    effect="blur"
                    className="w-full h-full object-cover"
                    placeholderSrc={item.imagePlaceholder}
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

        <div className="absolute !flex flex-row !items-center justify-center gap-3 right-6 xl:right-0 !mt-4">
          <div
            className="swiper-button-prev !w-8 prev !pl-1"
            role="button"
            aria-label="Depoimento anterior"
            tabIndex={0}
          />
          <div
            className="swiper-button-next !w-8 next !pr-1"
            role="button"
            aria-label="Próximo depoimento"
            tabIndex={0}
          />
        </div>
      </motion.div>
    </section>
  );
};
