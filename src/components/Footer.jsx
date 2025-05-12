import logo from "/assets/images/solta-move-logo.webp"
import ilustracao from "/assets/images/ilustracao-maratona.svg"
import iconInstragram from "/assets/images/icons/instagram.svg"
import iconYoutube from "/assets/images/icons/youtube.svg"

export const Footer = () => {
    return (
      <footer className="bg-brand-blue-light text-brand-dark px-4 md:px-12 py-8 flex flex-col gap-6 relative overflow-hidden">
        {/* Aviso */}
        <p className="text-xs text-center md:text-sm container-margin border-b-2 border-brand-light pb-4 ">
          Consulte o seu médico e siga todas as instruções de segurança antes de iniciar qualquer tipo de exercício, especialmente se você estiver grávida, amamentando, tem qualquer cuidado médico ou está tomando qualquer tipo de medicamento.
        </p>
  
        {/* Logo + Redes + Direitos */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 z-10">
          <div className="flex flex-col gap-4 container-margin">
            <img src={logo} alt="Solta Move" className="w-16" loading="lazy" />
            <div className="flex gap-4 mt-2 ">
              <a href="https://www.instagram.com/soltamove/" aria-label="Instagram" target="_blank" className="hover:-translate-y-2 duration-300 ease-in-out">
                <img src={iconInstragram} alt="Instagram" className="w-8" 
                loading="lazy"
                 />
              </a>
              <a href="https://www.youtube.com/@soltamove" aria-label="YouTube" className="hover:-translate-y-2 duration-300 ease-in-out" target="_blank" >
                <img src={iconYoutube} alt="YouTube" className="w-8" 
                loading="lazy"
                 />
              </a>
            </div>
            <small className="text-sm">©2025 Solta Move<br />Todos os direitos reservados.</small>
          </div>
  
          {/* Imagem decorativa à direita */}
          <img
            src={ilustracao}
            alt="Ilustração, mulher se exercitando"
            aria-hidden="true"
            className="absolute hidden md:block right-0 bottom-0 h-[200px] object-contain z-0"
            loading="lazy"
          />
        </div>
      </footer>
    );
  };
  