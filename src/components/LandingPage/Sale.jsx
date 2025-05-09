import { sale } from "../../data/sale";
import { CardSale } from "../CardSale";
import selo from "/assets/images/selo-garantia.webp";
import imagem from "/assets/images/plataforma-solta.webp";
import imagemDispositivoDesktop from "/assets/images/dispositivos-plataforma-solta-desktop.webp";
import imagemDispositivoMobile from "/assets/images/dispositivos-plataforma-solta-mobile.webp";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
export const Sale = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section
      id="sale"
      aria-label="Confira todos os nossos planos"
      className="scroll-mt-20"
    >
      <div className="  bg-brand-gray-100 py-12 md:py-16 ">
        <div className="flex px-6 flex-col gap-6 md:gap-8 justify-center items-center text-center max-w-2xl mx-auto mb-6 md:mb-8">
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold "
            // initial={{ opacity: 0, y: 30 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 1.2, delay: 0.2 }}
            // viewport={{ once: true }}
          >
            Comece a se mover para ir ainda mais longe.
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-brand-gray-800"
            // initial={{ opacity: 0, y: 30 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 1.2, delay: 0.5 }}
            // viewport={{ once: true }}
          >
            Chegou a hora de cuidar de você e da sua saúde. Tenha acesso a
            diversas modalidades de treinos divertidos, Calendário, Maratonas,
            Coleções e muito mais.{" "}
            <strong className="font-bold text-brand-dark">
              {" "}
              Escolha abaixo o plano que mais combina com você.{" "}
            </strong>
          </motion.p>
        </div>

        <div
          id="cards"
          ref={ref}
          className=" max-w-[1080px] h-auto px-6 xl:px-0  flex flex-col md:grid grid-cols-3 lg:gap-12      mx-auto gap-6     "
        >
          {sale.map((item, index) => (
            <CardSale key={index} cards={item} delay={index} inView={inView} />
          ))}
        </div>
        <div className="container-margin pt-12 md:pt-16 md:grid grid-cols-2 gap-6 md:gap-8 px-6 xl:px-0">
          <div className="flex  flex-col gap-6 md:gap-8 justify-center   max-w-2xl mx-auto mb-6 md:mb-8 ">
            <div className="flex gap-8 items-center">
              <motion.h2
                className="text-3xl md:text-5xl font-extrabold "
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                Endorfina <br />
                garantida <br />
                por 15 dias.
              </motion.h2>
              <motion.img
                src={selo}
                alt="Selo de Garantia"
                className="w-[30%]"
                loading="lazy"
                // initial={{ opacity: 0, scale: 0 }}
                // animate={{ opacity: 1, scale: 1 }}
                // transition={{
                //   duration: 0.4,
                //   scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                // }}
                // viewport={{ once: true }}
              />
            </div>
            <motion.p
              className="text-lg md:text-xl text-brand-gray-800"
              // initial={{ opacity: 0, y: 50 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 1 }}
              // viewport={{ once: true }}
            >
              <strong className="font-bold text-brand-dark mr-1">
                {" "}
                Ao assinar um dos nossos planos, você tem 15 dias para
                experimentar tudo que oferecemos.
              </strong>
              A chance dos treinos da Solta Move não mexerem com você é muito
              pequena. Mas ninguém é perfeita, nem mesmo a Solta Move. Se você
              não se sentir mais viva, confiante e saudável, basta cancelar sua
              assinatura dentro deste período da garantia. Reembolsamos 100% do
              valor do seu plano e continuamos amigas.
            </motion.p>
          </div>
          <motion.img
            className="drop-shadow-xl"
            src={imagem}
            alt="Todos os serviços que podem ser adiquiridos "
            // initial={{ opacity: 0, y: 30 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 1, delay: 0.5 }}
            // viewport={{ once: true }}
          />
        </div>
      </div>
      <div className="container-margin pt-12 md:pt-16 flex items-center flex-col gap-6  px-6 xl:px-0">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-center "
          // initial={{ opacity: 0, y: 30 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1 }}
          // viewport={{ once: true }}
        >
          Treine no seu dispositivo favorito.
        </motion.h2>
        <motion.img
          src={imagemDispositivoDesktop}
          alt="Plataforma solta em diversos dispositivos"
          className="w-[80%] lg:w-[90%] hidden md:block"
          // initial={{ opacity: 0, y: 50 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1 }}
          // viewport={{ once: true }}
        />
        <motion.img
          src={imagemDispositivoMobile}
          alt="Plataforma solta em diversos dispositivos"
          className="w-full block md:hidden"
          // initial={{ opacity: 0, y: 50 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1 }}
          // viewport={{ once: true }}
        />
      </div>
      <div className=" py-12 md:py-16 px-6 xl:px-0 max-w-2xl mx-auto flex flex-col items-center gap-2 hidden">
        <motion.div
          className="mx-auto bg-brand-gray-100  rounded-2xl md:rounded-3xl p-8 md:p-12  gap-8 flex flex-col"
          // initial={{ opacity: 0, y: 30 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1.2, delay: 0.2 }}
          // viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-5xl font-extrabold text-center ">
            Uma Move a Outra.
          </h3>
          <p className="text-lg md:text-xl text-brand-gray-800 text-center">
            Mulheres que ganham até 2 salários mínimos são as que menos praticam
            atividade física no Brasil*.{" "}
            <strong className="text-brand-dark font-bold ">
              {" "}
              Ao assinar nossa plataforma você contribui para que outra mulher
              tenha acesso aos nossos treinos.{" "}
            </strong>
          </p>
        </motion.div>
        <motion.p
          className="text-sm text-brand-gray-700 mx-auto"
          // initial={{ opacity: 0, y: 50 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1.2, delay: 0.5 }}
          // viewport={{ once: true }}
        >
          *Fonte: Datafolha Instituto de Pesquisas
        </motion.p>
      </div>
    </section>
  );
};
