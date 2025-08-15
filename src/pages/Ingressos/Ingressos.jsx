import { useLocation } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import {
  IngressosContainer,
  IngressosContent,
  UmIngresso,
} from "./IngressosStyled";
import { useEffect } from "react";

export default function Ingressos() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elemento = document.querySelector(location.hash);
      if (elemento) {
        elemento.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <IngressosContainer id="top">
        <h3 className="title">Ingressos</h3>
        <IngressosContent>
          <UmIngresso>
            <span></span>
            <h2>Nome do Evento</h2>
            <p>
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est.
            </p>
            <a href="" className="btn">
              GARANTA SEU INGRESSO
            </a>
          </UmIngresso>
          <UmIngresso>
            <span></span>
            <h2>Nome do Evento</h2>
            <p>
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est.
            </p>
            <a href="" className="btn">
              GARANTA SEU INGRESSO
            </a>
          </UmIngresso>
          <UmIngresso>
            <span></span>
            <h2>Nome do Evento</h2>
            <p>
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est.
            </p>
            <a href="" className="btn">
              GARANTA SEU INGRESSO
            </a>
          </UmIngresso>
          <UmIngresso>
            <span></span>
            <h2>Nome do Evento</h2>
            <p>
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est.
            </p>
            <a href="" className="btn">
              GARANTA SEU INGRESSO
            </a>
          </UmIngresso>
        </IngressosContent>
      </IngressosContainer>
      <Footer />
    </>
  );
}
