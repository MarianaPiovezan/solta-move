import { HighlightEffect } from "../HighlightEffect";

export const Welcome = () => {
  return (
    <section
      aria-label="Mensagem de boas-vindas"
      className="flex flex-col h-auto items-center pt-24 bg-brand-gray-100 overflow-hidden justify-center"
    >
      <HighlightEffect />
      <div className="bg-brand-yellow py-16 w-full flex flex-col items-center gap-6 md:gap-8 text-center px-6">
        <h2 className="text-3xl font-extrabold">
          Bem-vinda ao fitness fora do padrão
        </h2>
        <p className="text-base md:text-lg container-margin">
          Nós acreditamos que o verdadeiro poder dos exercícios está além do
          espelho. Por isso, estamos revolucionando o fitness. Não estamos aqui
          pelo “Corpo Perfeito”.
          <strong> Estamos aqui para te mover para você mover o mundo.</strong>
        </p>
      </div>
    </section>
  );
};
