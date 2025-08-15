import { useLocation } from "react-router-dom";
import { ListaEventos } from "../../components/ListaEventos/ListaEventos";
import { GuardaColunas } from "../Home/HomeStyled";
import { ContatosContainer, ContatosContent } from "./ContatosStyled";
import { useEffect } from "react";
import { Footer } from "../../components/Footer/Footer";

export default function Contatos() {
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
      <ContatosContainer id="top">
        <GuardaColunas>
          <ContatosContent>
            <h3 className="title">Contatos</h3>
            <div className="contato">
              <h2>Dúvidas Gerais</h2>
              <p>
                Para mais informações sobre a Lista Área 48 entre em contato
                atráves do WhatsApp <a href="">(48) 99971-1878.</a>
              </p>
            </div>
            <div className="contato">
              <h2>Ingressos</h2>
              <p>
                Os ingressos para cada evento são vendidos pelo portal{" "}
                <a href="">Lets.events</a>
              </p>
            </div>
            <div className="contato">
              <h2>Inscrições</h2>
              <p>
                Pilotos e equipes podem se inscrever exclusivamente pelo nosso
                WhatsApp <a href="">(48) 99971-1878.</a>
              </p>
            </div>
            <div className="redes">
              <h3>Redes Sociais</h3>
              <div>
                <a target="_blank" href="https://www.facebook.com/ListaArea48">
                  <img src="/face-redes.svg" alt="Facebook" />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/alistaarea48/"
                >
                  <img src="/insta-redes.svg" alt="Instagram" />
                </a>
              </div>
            </div>
          </ContatosContent>
          <span></span>
          <ListaEventos />
        </GuardaColunas>
      </ContatosContainer>
      <Footer />
    </>
  );
}
