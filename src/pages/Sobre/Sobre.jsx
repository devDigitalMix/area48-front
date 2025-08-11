import { useState } from "react";
import { ListaEventos } from "../../components/ListaEventos/ListaEventos";
import { GuardaColunas } from "../Home/HomeStyled";
import {
  Historia,
  SobreContainer,
  SobreMain,
  SobrePilotos,
} from "./SobreStyled";

export default function Sobre() {
  const [slide, setSlide] = useState("slide1");

  return (
    <SobreContainer>
      <GuardaColunas>
        <SobreMain>
          <Historia>
            <span className="img"></span>
            <div className="historia-content">
              <h3 className="title">Nossa História</h3>
              <p>
                Começou vindo de corridas proibidas nos Estados Unidos, onde foi
                criado um formato e começou a vir para o Brasil em 2016, em
                Julho de 2017 começamos com carros “mais de rua” e evoluímos até
                o nível de carros que passam dos 240km/h em 5 segundos.
              </p>
              <p>
                O DDD 48 abrange de Tijucas até Araranguá com uma cobertura de
                67 cidades.
              </p>
            </div>
          </Historia>
          <SobrePilotos>
            <h3 className="title">Pilotos</h3>
            <p>
              Cerca de 100 carros participam da Área 48 e nas categorias mistas
            </p>
            <p>CONHEÇA OS PILOTOS</p>
            <div className="pilotosSlide">
              <div
                className={
                  slide == "slide1" ? "slideContent active" : "slideContent"
                }
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div
                className={
                  slide == "slide2" ? "slideContent active" : "slideContent"
                }
              >
                <span>s</span>
                <span>s</span>
                <span>s</span>
              </div>
              <div className="slideBtns">
                <button
                  className={slide == "slide1" ? "active" : ""}
                  onClick={() => setSlide("slide1")}
                ></button>
                <button
                  className={slide == "slide2" ? "active" : ""}
                  onClick={() => setSlide("slide2")}
                ></button>
              </div>
            </div>
          </SobrePilotos>
        </SobreMain>
        <span></span>
        <ListaEventos />
      </GuardaColunas>
    </SobreContainer>
  );
}
