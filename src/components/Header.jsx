import { Button } from "./Button";
import logo from "../assets/images/solta-move-logo.webp"

export const Header = () => {
  return (
    <header className="bg-brand-yellow h-[4rem] md:h-[5rem] top-2 md:top-4 rounded-xl left-2 right-2 md:left-4 md:right-4 z-50 fixed   scroll-smooth shadow-lg flex items-center font-extrabold text-sm md:text-lg px-6">
      <nav aria-label="Navegação principal" className="flex justify-between container-margin items-center w-full">
        <img className="w-10 md:w-16 h-fit" src={logo} alt="Solta Move" />
        <ul className="flex gap-6 md:gap-8 items-center">
          <li>
            <Button title={"Experimente por 15 dias"} link="ssdfd" />
          </li>
          <li className=" hover:border-brand-yellow ease-linear duration-300 border-b-2 border-brand-dark">
            <a href="">Entrar</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
