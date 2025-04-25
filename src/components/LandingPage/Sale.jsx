import { sale } from "../../data/sale";
import { CardSale } from "../CardSale";
import selo from "../../assets/images/selo-garantia.webp";
import imagem from "../../assets/images/plataforma-solta.webp";
import imagemDispositivoDesktop from "../../assets/images/dispositivos-plataforma-solta-desktop.webp";
import imagemDispositivoMobile from "../../assets/images/dispositivos-plataforma-solta-mobile.webp";
export const Sale = () => {
  return (
    <section
      id="sale"
      aria-label="Confira todos os nossos planos"
      className="overflow-hidden   "
    >
      <div className="overflow-hidden  bg-brand-gray-100 py-12 md:py-16 ">
        <div className="flex px-6 flex-col gap-6 md:gap-8 justify-center items-center text-center max-w-2xl mx-auto mb-6 md:mb-8">
          <h2 className="text-3xl md:text-5xl font-extrabold ">
            Comece a se mover para ir ainda mais longe.
          </h2>
          <p className="text-lg md:text-xl text-brand-gray-800">
            Chegou a hora de cuidar de você e da sua saúde. Tenha acesso a
            diversas modalidades de treinos divertidos, Calendário, Maratonas,
            Coleções e muito mais.{" "}
            <strong className="font-bold text-brand-dark">
              {" "}
              Escolha abaixo o plano que mais combina com você.{" "}
            </strong>
          </p>
        </div>

        <div
          id="cards"
          className=" max-w-[1080px] h-auto px-6 xl:px-0  flex flex-col md:grid grid-cols-3 lg:gap-12      mx-auto gap-6     "
        >
          {sale.map((item, index) => (
            <CardSale key={index} cards={item} />
          ))}
        </div>
        <div className="container-margin pt-16 md:grid grid-cols-2 gap-6 md:gap-8 px-6 xl:px-0">
          <div className="flex  flex-col gap-6 md:gap-8 justify-center   max-w-2xl mx-auto mb-6 md:mb-8 ">
            <div className="flex gap-8 items-center">
              <h2 className="text-3xl md:text-5xl font-extrabold ">
                Endorfina <br />
                garantida <br />
                por 15 dias.
              </h2>
              <img src={selo} alt="Selo de Garantia" className="w-[30%]" />
            </div>
            <p className="text-lg md:text-xl text-brand-gray-800">
              <strong className="font-bold text-brand-dark">
                {" "}
                Ao assinar um dos nossos planos, você tem 15 dias para
                experimentar tudo que oferecemos.
              </strong>
              A chance dos treinos da Solta Move não mexerem com você é muito
              pequena. Mas ninguém é perfeita, nem mesmo a Solta Move. Se você
              não se sentir mais viva, confiante e saudável, basta cancelar sua
              assinatura dentro deste período da garantia. Reembolsamos 100% do
              valor do seu plano e continuamos amigas.
            </p>
          </div>
          <img
            className="drop-shadow-xl"
            src={imagem}
            alt="Todos os serviços que podem ser adiquiridos ao "
          />
        </div>
      </div>
      <div className="container-margin pt-12 md:pt-16 flex items-center flex-col gap-6  px-6 xl:px-0">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center ">
          Treine no seu dispositivo favorito.
        </h2>
        <img
          src={imagemDispositivoDesktop}
          alt="Plataforma solta em diversos dispositivos"
          className="w-[80%] lg:w-[90%] hidden md:block"
        />
        <img
          src={imagemDispositivoMobile}
          alt="Plataforma solta em diversos dispositivos"
          className="w-full block md:hidden"
        />
      </div>
      <div className=" py-12 md:py-16 px-6 xl:px-0 max-w-2xl mx-auto flex flex-col items-center gap-2">
        <div className="mx-auto bg-brand-gray-100  rounded-2xl md:rounded-3xl p-12  gap-8 flex flex-col">
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
        </div>
        <p className="text-sm text-brand-gray-700 mx-auto">
          *Fonte: Datafolha Instituto de Pesquisas
        </p>
      </div>
    </section>
  );
};
