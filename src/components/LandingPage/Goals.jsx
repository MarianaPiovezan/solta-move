import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { goals } from "../../data/goals";
import moldura from "../../assets/images/moldura-smartphone.webp";
import gif from "../../assets/images/perguntas-calendário-de-treino.gif";
import imagem from "../../assets/images/mulher-alongamento.webp";

export const Goals = () => {
  return (
    <section
      id="goals"
      aria-label="Depoimentos de alunas"
      className="overflow-hidden pt-12 md:pt-16  "
    >
      <div className="flex flex-col lg:flex-row px-6 gap-6 lg:gap-16 justify-center items-center   mx-6 mb-8 bg-brand-dark rounded-2xl md:rounded-3xl container-margin   text-brand-light pt-8 md:px-24 ">
        <div className="flex flex-col gap-6 md:gap-8 max-w-[533px] p-0 md:py-10">
          <h2 className="text-3xl md:text-5xl font-extrabold ">
            Defina seu objetivo e a gente te guia até lá.
          </h2>
          <p className="text-lg md:text-xl">
            <strong className="text-brand-yellow">
              Receba um calendário de treino recomendado para você.
            </strong>{" "}
            É só responder algumas perguntas e pronto. Você saberá exatamente o
            que precisa fazer para evoluir nos treinos e chegar no seu objetivo
            principal. Nós planejamos tudo, então a única coisa que você precisa
            fazer é aparecer no treino.
          </p>
        </div>
        <div className="relative z-10 w-full max-w-md md:pt-8 md:self-end ">
          {/* moldura como fundo, gif sobreposto */}
          <img
            src={gif}
            alt="Tela de exemplo do aplicativo com opções de objetivo"
            className="relative w-[55%] max-w-[350px]  -bottom-0 left-1/2 -translate-x-1/2 "
          />
          <img
            src={moldura}
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 w-[65%] max-w-[350px] -translate-x-1/2 z-30"
          />
        </div>
      </div>

      <h3 className="text-2xl md:text-3xl container-margin pt-8 font-extrabold px-6 xl:px-0">
        Comece sua Jornada. Entregue tudo.
      </h3>

      <div className=" container-margin  grid-cols-3 gap-12 hidden lg:grid pt-8 px-6 xl:px-0 ">
        {goals.map((item, index) => (
          <figure key={index}>
            <div className="rounded-2xl md:rounded-3xl overflow-hidden mb-6 border border-brand-gray-100 relative">
              <h4 className="font-extrabold text-sm md:text-base lg:text-lg leading-none absolute top-4 left-4 w-[100px] md:w-[150px] lg:w-[200px]">
                {item.title}
              </h4>
              <img
                className="w-full"
                src={item.image}
                alt={`Foto de ${item.name}`}
              />
            </div>

            <figcaption className="text-brand-gray-700 pt-1 mt-3 text-sm md:text-base">
              <strong className="text-brand-dark">{item.highlight}</strong>{" "}
              {item.description}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="w-full h-auto lg:!hidden  ml-6 lg:ml-[10%] relative mt-8">
        <Swiper
          className="mb-12 sm:block"
          modules={[Navigation, Pagination, Autoplay]}
          rewind={false}
          spaceBetween={24}
          slidesPerView={1.5}
          centeredSlides={false}
          navigation={{
            prevEl: "#goals .swiper-button-prev",
            nextEl: "#goals .swiper-button-next",
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
              slidesPerView: 2,
              spaceBetween: 48
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 48
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 48
            },
          }}
        >
          {goals.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <figure>
                <div className="rounded-2xl md:rounded-3xl overflow-hidden mb-6 border border-brand-gray-100 relative">
                  <h3 className="font-extrabold text-sm md:text-base lg:text-lg leading-none absolute top-4 left-4 w-[100px] md:w-[150px] lg:w-[200px]">
                    {item.title}
                  </h3>
                  <img
                    className="w-full"
                    src={item.image}
                    alt={`Foto de ${item.name}`}
                  />
                </div>

                <figcaption className="text-brand-gray-700 pt-1 mt-3 text-sm md:text-base">
                  <strong className="text-brand-dark">{item.highlight}</strong>{" "}
                  {item.description}
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute !flex flex-row   !items-center justify-center gap-3  right-6 xl:right-0 !mt-4 ">
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
      <div className="text-3xl md:text-5xl font-extrabold text-brand-dark flex flex-col md:flex-row items-center  container-margin justify-between pt-16 px-6 ">
        <h3 className="self-start md:self-center leading-none">Para o <br/>
        corpo todo</h3>
        <img src={imagem} className="sm:w-[70%] md:w-[50%] md:-ml-[8%]" alt="Mulher se alongando" />
        <h3 className="self-end md:self-center leading-none text-right md:text-left">e todos <br/>
        os corpos</h3>
      </div>
    </section>
  );
};
