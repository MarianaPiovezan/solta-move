import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { treinamentos, maratonas } from "../../data/classes";
import imagem from "/assets/images/siga-o-fluxo.webp"
import { motion } from "motion/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const ClassShowcase = () => {
  return (
    <section
      id="class-show-case"
      aria-label="Sugestões de aulas para você experimentar"
      className="overflow-hidden pt-12 md:pt-16 "
    >
      <div className="pb-12 md:pb-16">
      <div className="flex  flex-col gap-6 md:gap-8 pb-6 md:pb-8 container-margin px-6 xl:px-0">
        <motion.h2 className="text-3xl md:text-5xl lg:max-w-1/2 font-extrabold "   initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
          Tem sempre uma novidade para você experimentar.
        </motion.h2>
        <motion.p className="text-lg md:text-xl text-brand-gray-700 lg:max-w-1/2"   initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
          Toda semana novas aulas são adicionadas na plataforma. Com novos
          movimentos, novos desafios, novas descobertas.
        </motion.p>
      </div>
      <motion.div id="treinamentos" className="container-margin h-auto px-6 xl:px-0    relative  mx-auto  pr-0 overflow-visible   "   initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        <Swiper
          className="mb-12 sm:block !overflow-visible"
          modules={[Navigation, Pagination, Autoplay]}
          rewind={false}
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
          {treinamentos.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <figure>
                <div className="rounded-2xl md:rounded-3xl overflow-hidden mb-1 border border-brand-gray-100 aspect-7/4  ">
                <LazyLoadImage
                   src={item.image}
                   alt={`Foto de ${item.name}`}
                   effect="blur"
                   className="w-full h-full object-cover"
                   
                  />
                </div>
               
                <figcaption className="font-bold  pt-1  text-lg md:text-xl to-brand-dark">
                  <p>{item.title}</p>
                  <p className="text-brand-gray-700 font-normal leading-none">{item.subtitle}</p>
                  <span className="text-brand-gray-700 font-normal text-sm md:text-base"></span>
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
      </motion.div>
      </div>
      <div className="py-12 md:py-16">
      <div className="flex  flex-col gap-6 md:gap-8 pb-6 md:pb-8 container-margin px-6 xl:px-0">
        <motion.div   initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        <h3 className="text-xl md:text-2xl font-bold">Maratonas</h3>
        <h2 className="text-3xl md:text-5xl lg:max-w-1/2 font-extrabold ">
        Fique pronta para qualquer desafio.
        </h2>
        </motion.div>
        <motion.p className="text-lg md:text-xl text-brand-gray-700 lg:max-w-1/2"   initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        As Maratonas são combinações de treinos de até 4 semanas, estruturados <strong className="text-brand-dark"> para te ajudar a alcançar uma meta específica ou a enfrentar um desafio do momento.</strong> Está no período menstrual e quer aliviar as dores da cólica? Entendido. Precisando de confiança para aquele projeto difícil da próxima semana? Aqui também. Mais mobilidade? Ao seu dispor.
        </motion.p>
      </div>
      <motion.div id="maratonas" className="container-margin h-auto px-6 xl:px-0    relative  mx-auto  pr-0 overflow-visible   "   initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        <Swiper
          className="mb-12 sm:block !overflow-visible"
          modules={[Navigation, Pagination, Autoplay]}
          rewind={false}
          spaceBetween={24}
          slidesPerView={1.5}
          centeredSlides={false}
          navigation={{
            prevEl: "#maratonas .swiper-button-prev",
            nextEl: "#maratonas .swiper-button-next",
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
          {maratonas.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-center items-center"
            >
          
          <div className="rounded-2xl md:rounded-3xl overflow-hidden mb-1 border border-brand-gray-100 aspect-6/3 bg-gray-200">
  <LazyLoadImage
    src={item.image}
    alt={`Foto de ${item.name}`}
    effect="blur"
    className="w-full h-full object-cover"
  />
</div>
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
      </motion.div>
      </div>
      
      <div className="flex md:grid grid-cols-2 items-center  flex-col md:flex-row gap-6 md:gap-8 pb-6 md:pb-8 container-margin px-6 xl:px-0 py-12 !hidden ">
        <div>
   
        <motion.h2 className="text-3xl md:text-5xl  font-extrabold mb-6 md:mb-8 "    initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}>
        Siga o fluxo. <br/> 
Mantenha o ciclo de treino.
        </motion.h2>
       
        <motion.p className="text-lg md:text-xl text-brand-gray-700 "    initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}>
        <strong className="text-brand-dark">Potencialize seus resultados sincronizando seus treinos com seu ciclo menstrual. </strong>Você não é a mesma todos os dias, seu treino também não precisa ser. Na Solta Move você aprende como usar seu ciclo menstrual a seu favor e levar seu desempenho nos treinos a um outro nível. Você vai descobrir que seu ciclo menstrual é o seu aliado, não o seu inimigo.
        </motion.p>
        </div>
      
      <motion.img src={imagem}  alt="Imagem de uma mulher fazendo exercício sincronizado com seu ciclo mentrual"    initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}  loading="lazy"/>
      </div>
    </section>
  );
};
