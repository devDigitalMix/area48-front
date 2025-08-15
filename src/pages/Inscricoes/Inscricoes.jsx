import { useLocation } from "react-router-dom";
import { ListaEventos } from "../../components/ListaEventos/ListaEventos";
import { GuardaColunas } from "../Home/HomeStyled";
import { InscricoesContainer, InscricoesContent } from "./InscricoesStyled";
import { useEffect } from "react";
import { Footer } from "../../components/Footer/Footer";

export default function Inscricoes() {
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
      <InscricoesContainer id="top">
        <GuardaColunas>
          <InscricoesContent>
            <h3 className="title">Inscrições</h3>
            <p>
              Pilotos e equipes podem se inscrever exclusivamente pelo nosso
              WhatsApp
            </p>
            <p>
              Basta entrar em contato para enviar as informações necessárias.
            </p>
            <div>
              <a href="" className="btn">
                QUERO ME INSCREVER
              </a>
              <p>
                Consulte o regulamento técnico para <a href="">TOP20</a> e{" "}
                <a href="">TOPRaciing</a>
              </p>
            </div>
          </InscricoesContent>
          <span></span>
          <ListaEventos />
        </GuardaColunas>
      </InscricoesContainer>
      <Footer />
    </>
  );
}
