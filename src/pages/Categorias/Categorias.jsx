import { useLocation } from "react-router-dom";
import { ListaEventos } from "../../components/ListaEventos/ListaEventos";
import { GuardaColunas } from "../Home/HomeStyled";
import {
  CategoriasBanner,
  CategoriasContainer,
  CategoriasContent,
} from "./CategoriasStyled";
import { useEffect } from "react";
import { Footer } from "../../components/Footer/Footer";

export function Categorias() {
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
      <CategoriasContainer id="top">
        <CategoriasBanner></CategoriasBanner>
        <GuardaColunas>
          <CategoriasContent>
            <div className="categorias-title">
              <h3 className="title">Categorias</h3>
              <p>
                Desafios de arrancada para carros e motos que testam limites e
                definem o espírito competitivo. Aqui, cada segundo conta!
              </p>
            </div>
            <div className="categorias-itens">
              <div className="categoria-item">
                <h2 className="title">Desafio 8 Segundos</h2>
                <span></span>
                <p>
                  Os veículos mais rápidos em busca da perfeição! Nessa
                  categoria
                  <i> o tempo total de pista não pode ultrapassar os 8s.</i>
                </p>
              </div>
              <div className="categoria-item">
                <h2 className="title">Desafio 9 Segundos</h2>
                <span></span>
                <p>
                  Equipes que querem afirmar domínio pista após pista! Nessa
                  categoria{" "}
                  <i>o tempo total de pista não pode ultrapassar os 9s.</i>
                </p>
              </div>
              <div className="categoria-item">
                <h2 className="title">Rodadas Oficiais</h2>
                <span></span>
                <p>
                  Logo após os treinos, começam as rodadas que definem os
                  vencedores das categorias de desafios e o novo rei das listas
                  TOP20 e TOPRacing
                </p>
              </div>
            </div>
            <h5>
              Consulte o regulamento técnico para <a href="">TOP20</a> e{" "}
              <a href="">TOPRaciing</a>
            </h5>
          </CategoriasContent>
          <ListaEventos />
        </GuardaColunas>
      </CategoriasContainer>
      <Footer />
    </>
  );
}
