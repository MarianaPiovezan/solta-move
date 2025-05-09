import { useEffect } from "react";
import { useLocation } from "react-router";

export const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    // Espera a animação (Framer Motion) terminar
    const timeout = setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 600); 

    return () => clearTimeout(timeout);
  }, [hash]);

  return null;
};
