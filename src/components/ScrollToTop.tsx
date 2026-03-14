import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Se não houver hash (ex: #servicos), volta para o topo (0,0)
    if (!hash) {
      window.scrollTo(0, 0);
    } 
    // Se houver hash, o navegador ou o comportamento padrão do scroll-behavior: smooth cuidará disso
    else {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return null;
};
