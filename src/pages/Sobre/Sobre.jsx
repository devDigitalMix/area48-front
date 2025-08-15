// import { useState, useEffect } from "react";
import { ListaEventos } from "../../components/ListaEventos/ListaEventos";
import { GuardaColunas } from "../Home/HomeStyled";
import {
  Historia,
  SobreContainer,
  SobreMain,
  SobrePilotos,
} from "./SobreStyled";
import { Footer } from "../../components/Footer/Footer";

export default function Sobre() {
  // const maxIndex = 5;

  // const [slideIndex, setSlideIndex] = useState(0);
  // const [slides, setSlides] = useState(["slide0", "slide1", "slide2"]);

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [slidesToShow, setSlidesToShow] = useState(3);

  // useEffect(() => {
  //   // Atualiza slidesToShow com base na largura da tela
  //   function handleResize() {
  //     setWindowWidth(window.innerWidth);
  //     if (window.innerWidth < 500) {
  //       setSlidesToShow(1);
  //     } else if (window.innerWidth < 730) {
  //       setSlidesToShow(2);
  //     } else {
  //       setSlidesToShow(3);
  //     }
  //   }

  //   window.addEventListener("resize", handleResize);
  //   handleResize(); // chama na montagem para definir o valor inicial

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // function getSlidesFromIndex(startIndex, count) {
  //   // Retorna 'count' slides a partir do startIndex, com loop
  //   const result = [];
  //   for (let i = 0; i < count; i++) {
  //     let idx =
  //       startIndex + i > maxIndex
  //         ? startIndex + i - (maxIndex + 1)
  //         : startIndex + i;
  //     result.push(`slide${idx}`);
  //   }
  //   return result;
  // }

  // function nextSlide() {
  //   const nextIndex = slideIndex + 1 > maxIndex ? 0 : slideIndex + 1;
  //   setSlideIndex(nextIndex);
  //   setSlides(getSlidesFromIndex(nextIndex, slidesToShow));
  // }

  // function prevSlide() {
  //   const prevIndex = slideIndex - 1 < 0 ? maxIndex : slideIndex - 1;
  //   setSlideIndex(prevIndex);
  //   setSlides(getSlidesFromIndex(prevIndex, slidesToShow));
  // }

  // Atualiza os slides se o slidesToShow mudar (ex: redimensionar a tela)
  // useEffect(() => {
  //   setSlides(getSlidesFromIndex(slideIndex, slidesToShow));
  // }, [slidesToShow, slideIndex]);

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
          {/* <SobrePilotos>
            <h3 className="title">Pilotos</h3>
            <p>
              Cerca de 100 carros participam da Área 48 e nas categorias mistas
            </p>
            <p>CONHEÇA OS PILOTOS</p>
            <div className="pilotosSlide">
              <div className="slideContent">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    className={slides.includes(`slide${i}`) ? "active" : ""}
                  >
                    {`Slide ${i + 1}`}
                  </span>
                ))}
              </div>
              <div className="slideBtns">
                <button onClick={prevSlide}>
                  <img src="/back.svg" alt="anterior" />
                </button>
                <button onClick={nextSlide}>
                  <img src="/next.svg" alt="próximo" />
                </button>
              </div>
            </div>
          </SobrePilotos> */}
        </SobreMain>
        <span></span>
        <ListaEventos />
      </GuardaColunas>
      <Footer />
    </SobreContainer>
  );
}
