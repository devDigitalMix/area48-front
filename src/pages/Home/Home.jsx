import { useEffect, useState } from "react";
import {
  createBannerService,
  getBannerService,
} from "../../services/bannerService";
import {
  CreateBannerForm,
  GuardaColunas,
  HomeContainer,
  HomeContent,
  HomeNoticias,
  ListaEventos,
  ModalUpdateNews,
  NormalNewsImage,
} from "./HomeStyled";
import { getNewsService, updateNewsService } from "../../services/newsService";
import { Input } from "../../components/Input/Input";
import { Label } from "../../components/Label/Label";

export default function Home() {
  const [banner, setBanner] = useState({});
  const [news, setNews] = useState([]);
  const [newsGeral, setNewsGeral] = useState({});
  const [newsCarros, setNewsCarros] = useState({});
  const [modalUpdateOn, setModalUpdateOn] = useState(false);
  const [chosenNews, setChosenNews] = useState({});
  const [dias, setDias] = useState(0);
  const [horas, setHoras] = useState(0);
  const [min, setMin] = useState(0);
  const [seg, setSeg] = useState(0);
  const [nextEvents, setNextEvents] = useState(0);
  const [event, setEvent] = useState("carros");

  // Lista de datas no formato "dd-mm-yyyy"
  const datasEventos = ["23-08-2025", "04-10-2025"];

  async function getBanner() {
    const response = await getBannerService();
    setBanner(response.data);
    const agora = new Date();
    const proximasDatas = datasEventos
      .map((str) => {
        const [dia, mes, ano] = str.split("-");
        return new Date(`${ano}-${mes}-${dia}T09:00:00`);
      })
      .filter((data) => data > agora)
      .sort((a, b) => a - b);

    const proxima = proximasDatas[0];
    if (!proxima) return;
    setNextEvents(proximasDatas);
  }

  async function handleBannerForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const response = await createBannerService(data);
    console.log(response);
  }

  async function getNews() {
    const response = await getNewsService();
    const newsList = response.data.results;

    // Encontrar o índice da primeira notícia com tag.name === "teste"
    const index = newsList.findIndex((n) =>
      n.tags?.some((tag) => tag.name === "teste")
    );

    if (index !== -1) {
      const [noticiaGeral] = newsList.splice(index, 1); // remove do array e pega a notícia
      setNewsGeral(noticiaGeral); // seta no state separado
    }
    const index2 = newsList.findIndex((n) =>
      n.tags?.some((tag) => tag.name === "ddd")
    );

    if (index2 !== -1) {
      const [noticiaCarro] = newsList.splice(index2, 1);
      console.log(noticiaCarro.tags[0].name);
      setNewsCarros(noticiaCarro); // seta no state separado
    }
    setNews(newsList); // define o restante das notícias
    console.log(newsList);
  }

  function formatarDataIsoParaBR(dataIso) {
    const data = new Date(dataIso);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0"); // Janeiro é 0
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }

  function handleChosenNews(news) {
    setChosenNews(news);
    setModalUpdateOn(true);
  }

  async function handleUpdateNews(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata.entries());
    const response = await updateNewsService(chosenNews.id, data);
    setChosenNews({});
    setModalUpdateOn(false);
    getNews();
  }

  useEffect(() => {
    function handleDate() {
      const agora = new Date();

      const proximasDatas = datasEventos
        .map((str) => {
          const [dia, mes, ano] = str.split("-");
          return new Date(`${ano}-${mes}-${dia}T09:00:00`);
        })
        .filter((data) => data > agora)
        .sort((a, b) => a - b);

      const proxima = proximasDatas[0];
      if (!proxima) return;

      const intervalo = setInterval(() => {
        const agora = new Date();
        const diff = proxima - agora;

        if (diff <= 0) {
          clearInterval(intervalo);
          setDias(0);
          setHoras(0);
          setMin(0);
          setSeg(0);
          return;
        }

        const totalSegundos = Math.floor(diff / 1000);
        const dias = Math.floor(totalSegundos / (3600 * 24));
        const horas = Math.floor((totalSegundos % (3600 * 24)) / 3600);
        const minutos = Math.floor((totalSegundos % 3600) / 60);
        const segundos = totalSegundos % 60;

        setDias(dias);
        setHoras(horas);
        setMin(minutos);
        setSeg(segundos);
      }, 1000);

      return () => clearInterval(intervalo);
    }

    handleDate();
  }, [datasEventos]);

  useEffect(() => {
    getBanner();
    getNews();
  }, []);

  return (
    <HomeContainer>
      {modalUpdateOn && (
        <ModalUpdateNews onSubmit={handleUpdateNews}>
          <span
            onClick={() => {
              setChosenNews({});
              setModalUpdateOn(false);
            }}
          >
            X
          </span>

          <div>
            <Label htmlFor="title" text="Título" />
            <Input type="text" name="title" defaultValue={chosenNews.title} />
          </div>
          <div>
            <Label htmlFor="description" text="Descrição" />
            <Input
              type="text"
              name="description"
              defaultValue={chosenNews.description}
            />
          </div>
          <input type="file" name="imageName" />
          <button type="submit" className="btn">
            Enviar
          </button>
        </ModalUpdateNews>
      )}
      <HomeContent bannersrc={banner.bannerName}>
        <div>
          <img src={banner.bannerName} alt="" />
        </div>
      </HomeContent>
      <GuardaColunas>
        {news.length > 0 && (
          <HomeNoticias>
            <div className="mainNews">
              {newsGeral && (
                <div
                  className="mainNoticia"
                  onClick={() => handleChosenNews(newsGeral)}
                >
                  <h3>Notícias Gerais</h3>
                  <NormalNewsImage
                    className="newsImage"
                    imagename={newsGeral.imageName}
                  >
                    <div className="tags">
                      {newsGeral.tags.length > 0 &&
                        newsGeral.tags.map((tag) => <h3>{tag.name}</h3>)}
                    </div>
                  </NormalNewsImage>
                  <h2>{newsGeral.title}</h2>
                  <p>{newsGeral.description}</p>
                </div>
              )}{" "}
              {newsCarros && (
                <div
                  className="mainNoticia"
                  onClick={() => handleChosenNews(newsCarros)}
                >
                  <h3>Carros</h3>
                  <NormalNewsImage
                    className="newsImage"
                    imagename={newsCarros.imageName}
                  >
                    <div className="tags">
                      {newsCarros.tags.length > 0 &&
                        newsCarros.tags.map((tag) => <h3>{tag.name}</h3>)}
                    </div>
                  </NormalNewsImage>
                  <h2>{newsCarros.title}</h2>
                  <p>{newsCarros.description}</p>
                </div>
              )}
            </div>
            <div className="normalNews">
              {news.map((noticia) => (
                <div
                  className="noticia"
                  onClick={() => handleChosenNews(noticia)}
                >
                  <NormalNewsImage
                    className="newsImage"
                    imagename={noticia.imageName}
                  >
                    {/* <img src={noticia.imageName} alt={noticia.title} /> */}
                  </NormalNewsImage>
                  <div className="noticia-content">
                    <p>{formatarDataIsoParaBR(noticia.postedDate)}</p>
                    <h2>{noticia.title}</h2>
                  </div>
                </div>
              ))}
            </div>
          </HomeNoticias>
        )}
        <span></span>
        <ListaEventos>
          <div className="eventos-title">
            <h2>Próximos Eventos</h2>
            <div className="eventSelector">
              <button
                className={event == "carros" ? "active" : ""}
                onClick={() => setEvent("carros")}
              >
                CARROS
              </button>
              <button
                className={event == "motos" ? "active" : ""}
                onClick={() => setEvent("motos")}
              >
                MOTOS
              </button>
            </div>
          </div>
          {event == "carros" ? (
            <>
              <div className="eventoContent">
                <img src="/evento-carro.webp" alt="Eventos de carro" />
                <div className="relogio">
                  <div className="relogio-text">
                    <h3>FALTAM</h3>
                  </div>
                  <div className="relogio-times">
                    <div>
                      <h3 className="dias">
                        {String(dias).padStart(2, "0")} <span>DIAS</span>
                      </h3>
                    </div>
                    <div>
                      <div>
                        <h3>{String(horas).padStart(2, "0")}h</h3>
                      </div>
                      <div>
                        <h3>{String(min).padStart(2, "0")}m</h3>
                      </div>
                      <div>
                        <h3>{String(seg).padStart(2, "0")}s</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="eventoInfo">
                <h3>Agenda Carros 2025</h3>
                <p>
                  Prepare-se para um calendário épico de arrancadas que promete
                  emoção e adrenalina!
                </p>
                {nextEvents.length > 0 && (
                  <ul>
                    {nextEvents.map((event) => (
                      <li>{formatarDataIsoParaBR(event)}</li>
                    ))}
                  </ul>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="eventoContent">
                <img src="/evento-carro.webp" alt="Eventos de carro" />
                <div className="relogio">
                  <div className="relogio-text">
                    <h3>FALTAM</h3>
                  </div>
                  <div className="relogio-times">
                    <div>
                      <h3 className="dias">
                        {String(dias).padStart(2, "0")} <span>DIAS</span>
                      </h3>
                    </div>
                    <div>
                      <div>
                        <h3>{String(horas).padStart(2, "0")}h</h3>
                      </div>
                      <div>
                        <h3>{String(min).padStart(2, "0")}m</h3>
                      </div>
                      <div>
                        <h3>{String(seg).padStart(2, "0")}s</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="eventoInfo">
                <h3>Agenda Motos 2025</h3>
                <p>
                  Prepare-se para um calendário épico de arrancadas que promete
                  emoção e adrenalina!
                </p>
                {nextEvents.length > 0 && (
                  <ul>
                    {nextEvents.map((event) => (
                      <li>{formatarDataIsoParaBR(event)}</li>
                    ))}
                  </ul>
                )}
              </div>
            </>
          )}
          <span></span>
          <p>*Datas sujeitas à alteração sem prévio aviso.</p>
          <a href="" className="btn">
            LOJA
          </a>
        </ListaEventos>
      </GuardaColunas>
      {/* <CreateBannerForm onSubmit={handleBannerForm}>
        <input type="file" name="bannerName" />
        <button type="submit">submit</button>
      </CreateBannerForm> */}
    </HomeContainer>
  );
}
