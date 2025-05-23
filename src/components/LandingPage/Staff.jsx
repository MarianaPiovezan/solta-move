import { motion } from "motion/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { trainers, contents } from "../../data/trainers";
import estrela from "/assets/images/icons/star.svg";
import video from "/assets/images/ola-treinos-divertidos.mp4";
import imagem from "/assets/images/vida-saudavel-sauda-voce.webp";

export const GroupStars = () => {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((index) => (
        <img className="w-5" key={index} src={estrela} alt="estrela" />
      ))}
    </div>
  );
};

export const Staff = () => {
  return (
    <section
      id="trainers"
      aria-label="Fique por dentro da plataforma"
      className="relative overflow-hidden py-12 md:py-16 h-[2900px] min-[500px]:h-[3000px]  min-[1280px]:h-[3100px] min-[1400px]:h-[3180px] min-[1600px]:h-[3450px]"
    >
      <div className="flex px-6 flex-col gap-8 justify-center items-center text-center max-w-2xl mx-auto mb-6 md:mb-8">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold "
          layout
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8  }}
          viewport={{ once: true }}
        >
          Treinadoras que representam.
        </motion.h2>
      </div>
      <motion.div className="container-margin px-6 xl:px-0 flex flex-col md:flex-row gap-8  items-stretch"
       layout
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, }}
       viewport={{ once: true }}
       >
        <div
          className="flex flex-col gap-6 md:gap-8 md:w-1/2 items-stretch"
         
        >
          <div className="bg-brand-gray-100 p-6 md:p-12 rounded-2xl   md:rounded-3xl text-brand-gray-800 text-lg md:text-xl  self-stretch  h-full">
            <p>
              Não precisa nem levantar a mão. Nosso time de levantamento de
              humor é responsável por te dar toda atenção e cuidado que você
              merece. E ainda te ajudar a manter o pique lá em cima.
              <strong className="text-brand-dark">
                Com um time desse é garantia de endorfina a aula toda.
              </strong>{" "}
            </p>
          </div>
          <div className="bg-brand-gray-100 p-6 md:p-12 rounded-2xl   md:rounded-3xl text-brand-dark   font-extrabold text-lg md:text-xl gap-1 flex flex-col self-stretch ">
            <div className="flex justify-between  ">
              {" "}
              <p>Acolhimento</p> <GroupStars />{" "}
            </div>
            <div className="flex justify-between  ">
              {" "}
              <p>Energia</p> <GroupStars />{" "}
            </div>
            <div className="flex justify-between  ">
              {" "}
              <p>Motivação</p> <GroupStars />{" "}
            </div>
          </div>
        </div>
        <div
          className="bg-brand-gray-100 p-6 md:p-12 rounded-2xl   md:rounded-3xl text-brand-dark  md:text-lg  font-bold md:w-1/2 grid grid-cols-2 gap-6 text-center "
         
        >
          {trainers.map((item, index) => (
            <figure key={index} className="flex flex-col items-center gap-1">
              {" "}
              <div className=" rounded-2xl aspect-9/7 overflow-hidden">
                <img
                  src={item.image}
                  alt={`Foto da treinadora ${item.name}`}
                  loading="lazy"
                />
              </div>{" "}
              <figcaption className="text-sm md:text-base leading-none font-bold pt-1 max-w-[90px] md:max-w-[300px] ">
                {item.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </motion.div>
      <motion.h3
        className="text-2xl md:text-3xl container-margin py-6 md:py-8 font-extrabold px-6  xl:px-0"
        layout
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8  }}
        viewport={{ once: true }}
      >
        A força que você precisa.
        <br />
        Sem forçar a barra.
      </motion.h3>
      <motion.div
        id="trainers-swiper"
        className="container-margin h-auto px-6 xl:px-0    relative  mx-auto  pr-0 overflow-visible   "
        layout
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Swiper
          className="mb-12 sm:block !overflow-visible"
          modules={[Navigation, Pagination, Autoplay]}
          rewind={true}
          spaceBetween={24}
          slidesPerView={1.5}
          centeredSlides={false}
          navigation={{
            prevEl: "#trainers-swiper .swiper-button-prev",
            nextEl: "#trainers-swiper .swiper-button-next",
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
                <strong className="text-brand-dark ">{item.highlight}</strong>{" "}
                {item.content}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute !flex flex-row !items-center justify-center gap-3  right-6 xl:right-0 !mt-4">
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
      <div className="py-12 md:py-16">
        <motion.div className="flex px-6 flex-col gap-6 md:gap-8 justify-center items-center text-center max-w-2xl mx-auto mb-6 md:mb-8" 
        layout
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
          <h2
            className="text-3xl md:text-5xl font-extrabold "
            
          >
            Adeus, Treinos punitivos. <br />
            Olá, treinos divertidos.
          </h2>
          <p
            className="text-lg md:text-xl text-brand-gray-700"
           
          >
            Fazer exercício na força do ódio, é coisa do passado. A Solta Move
            está aqui pra te convidar a descobrir uma nova maneira de se
            movimentar. De forma gentil, divertida e eficiente. Sem peso na
            consciência.
          </p>
        </motion.div>
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto"
        >
          Seu navegador não suporta vídeo HTML5.
        </video>
      </div>
      <div className="flex md:grid grid-cols-2 items-center  flex-col md:flex-row gap-6 md:gap-8   container-margin px-6 xl:px-0  ">
        <motion.div 
        layout
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
          <h2
            className="text-3xl md:text-5xl  font-extrabold mb-6 md:mb-8 "
          >
            Sua vida saudável saúda você.
          </h2>

          <p
            className="text-lg md:text-xl text-brand-gray-700 "
          >
            No passeio em família, na realização de um sonho ou quando toca sua
            música preferida na festa para você descer até o chão. A última
            coisa que você quer é não estar com a saúde em dia para aproveitar
            ao máximo esses momentos. Por isso, a Solta Move te prepara para uma
            vida, onde não falte saúde para viver os momentos mais incríveis e
            intensos da sua vida.{" "}
            <strong className="text-brand-dark">
              Bem-vinda a uma vida saudávilhosa.{" "}
            </strong>
          </p>
        </motion.div>

        <motion.div
             layout
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <img
            src={imagem}
            className="w-[80%] justify-self-center "
            loading="lazy"
            alt="Imagem de uma mulher se divertindo"
            

          />
        </motion.div>
      </div>
    </section>
  );
};
