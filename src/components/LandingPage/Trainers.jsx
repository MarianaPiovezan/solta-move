import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { trainers, contents } from "../../data/trainers";
import estrela from "../../assets/images/icons/star.svg"


export const GroupStars = () => {
  return (
    <div className="flex gap-2">
      { [1,2,3,4,5].map( index => (
        <img className="w-5" key={index} src={estrela} alt="estrela"/>
      ))}
    </div>
  )
}

export const Trainers = () => {

  return (
    <section
      id="trainers"
      aria-label="Fique por dentro da plataforma"
      className="overflow-hidden py-12 md:py-16  "
    >
      <div className="flex px-6 flex-col gap-8 justify-center items-center text-center max-w-2xl mx-auto mb-6 md:mb-8">
        <h2 className="text-3xl md:text-5xl font-extrabold ">
          Treinadoras que representam.
        </h2>
      </div>
      <div className="container-margin px-6 xl:px-0 flex flex-col md:flex-row gap-8  items-stretch">
        <div className="flex flex-col gap-6 md:gap-8 md:w-1/2">
          <div className="bg-brand-gray-100 p-6 md:p-12 rounded-2xl   md:rounded-3xl text-brand-gray-700 text-lg md:text-xl   ">
            <p>
              Não precisa nem levantar a mão. Nosso time de levantamento de
              humor é responsável por te dar toda atenção e cuidado que você
              merece. E ainda te ajudar a manter o pique lá em cima.
              <strong className="text-brand-dark">
                Com um time desse é garantia de endorfina a aula toda.
              </strong>{" "}
            </p>
          </div>
          <div className="bg-brand-gray-100 p-6 md:p-12 rounded-2xl   md:rounded-3xl text-brand-dark   font-extrabold text-lg md:text-xl gap-1 flex flex-col">
          <div className="flex justify-between  "> <p>Acolhimento</p> <GroupStars/> </div>
          <div className="flex justify-between  "> <p>Energia</p> <GroupStars/> </div>
          <div className="flex justify-between  "> <p>Motivação</p> <GroupStars/> </div>
          
          </div>
        </div>
        <div className="bg-brand-gray-100 p-6 md:p-12 rounded-2xl   md:rounded-3xl text-brand-dark  md:text-lg  font-bold md:w-1/2 grid grid-cols-2 gap-6 ">
            { trainers.map( item => (
              <figure className="flex flex-col items-center gap-1"> <div className="overflow-hidden rounded-2xl h-[150px]" ><img src={item.image} alt={item.name}/></div>  <figcaption>{item.name}</figcaption></figure>
            ))}
          </div>
      </div>
      <h3 className="text-2xl md:text-3xl container-margin py-6 md:py-8 font-extrabold px-6  xl:px-0">
      A força que você precisa. 
       <br />
       Sem forçar a barra.
      </h3>
      <div
        id="treinamentos"
        className="container-margin h-auto px-6 xl:px-0    relative  mx-auto  pr-0 overflow-visible   "
      >
        <Swiper
          className="mb-12 sm:block !overflow-visible"
          modules={[Navigation, Pagination, Autoplay]}
          rewind={true}
          spaceBetween={24}
          slidesPerView={1.5}
          centeredSlides={false}
          navigation={{
            prevEl: "#treinamentos .swiper-button-prev",
            nextEl: "#treinamentos .swiper-button-next",
          }}
          breakpoints={{
            520: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1200: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
        >
          {contents.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-center items-center"
            >
            
              <p className="text-brand-gray-700 font-normal text-sm md:text-base ">
              <strong className="text-brand-dark ">{item.highlight}</strong> {item.content}
              </p>
             
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
