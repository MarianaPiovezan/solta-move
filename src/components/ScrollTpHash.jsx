import { useEffect } from "react";
import { useLocation } from "react-router";

export const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const timeout = setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 800); 

    return () => clearTimeout(timeout);
  }, [hash]);

  return null;
};
