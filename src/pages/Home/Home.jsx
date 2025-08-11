import { useEffect, useState } from "react";
import {
  createBannerService,
  getBannerService,
} from "../../services/bannerService";
import {
  CategoriasHome,
  CreateBannerForm,
  GuardaColunas,
  HomeContainer,
  HomeContent,
  HomeNoticias,
  IngressosHome,
  InscricoesHome,
  ModalUpdateNews,
  Move,
  NormalNewsImage,
  Patrocinadores,
} from "./HomeStyled";
import { getNewsService, updateNewsService } from "../../services/newsService";
import { Input } from "../../components/Input/Input";
import { Label } from "../../components/Label/Label";
import { Footer } from "../../components/Footer/Footer";
import { ListaEventos } from "../../components/ListaEventos/ListaEventos";

export default function Home() {
  const [banner, setBanner] = useState({});
  const [news, setNews] = useState([]);
  const [newsGeral, setNewsGeral] = useState({});
  const [newsCarros, setNewsCarros] = useState({});
  const [modalUpdateOn, setModalUpdateOn] = useState(false);
  const [chosenNews, setChosenNews] = useState({});

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
  }

  async function handleBannerForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const response = await createBannerService(data);
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
    setNews(newsList);
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
  // let c = 0;
  // setInterval(() => {
  //   c++;
  //   console.log(c);
  // }, 50);

  async function handleUpdateNews(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata.entries());
    await updateNewsService(chosenNews.id, data);
    setChosenNews({});
    setModalUpdateOn(false);
    getNews();
  }

  useEffect(() => {
    getBanner();
    getNews();
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setC((prev) => prev + 1);
  //   }, 30);

  //   return () => clearInterval(interval);
  // }, []);

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
        <ListaEventos />
      </GuardaColunas>
      {/* <Patrocinadores>
        <h3>Patrocinadores</h3>
        <span></span>
        <Move positionx={c}></Move>
        <p>ENTRE OUTROS GRANDES NOMES</p>
      </Patrocinadores> */}
      <IngressosHome>
        <div className="ingressosHome container">
          <div className="ingressosContent">
            <div className="ingressosTitle">
              <h3>Ingressos</h3>
            </div>
            <p>
              Os ingressos para cada evento são vendidos pelo portal{" "}
              <a target="_blank" href="https://lets.events/">
                Lets.events
              </a>
              .
            </p>
            <p>
              Fique atento às redes sociais da Área 48, onde sempre{" "}
              <i>postamos o link oficial de cada evento!</i>
            </p>
            <button className="btn">GARANTA SEU INGRESSO</button>
          </div>
          <img src="/ingressos-img.webp" />
        </div>
      </IngressosHome>
      <InscricoesHome>
        <div className="ingressosHome container">
          <div className="ingressosContent">
            <div className="ingressosTitle">
              <h3>Inscrições</h3>
            </div>
            <p>
              Pilotos e equipes podem se inscrever exclusivamente pelo nosso{" "}
              <a target="_blank" href="https://lets.events/">
                WhatsApp
              </a>
              .
            </p>
            <p>
              Basta entrar em contato para enviar as informações necessárias.
            </p>
            <h4>PILOTO GARANTA SEU LUGAR NA PISTA</h4>
            <button className="btn">QUERO ME INSCREVER</button>
          </div>
        </div>
      </InscricoesHome>
      <CategoriasHome>
        <div className="ingressosHome container">
          <div className="ingressosContent">
            <div className="ingressosTitle">
              <h3>Categorias</h3>
            </div>
            <p>
              Desafios de arrancada para carros e motos que testam limites e
              definem o espírito competitivo. Aqui, cada segundo conta!
            </p>
            <button className="btn">SAIBA MAIS</button>
          </div>
        </div>
      </CategoriasHome>
      <Footer />
      {/* <CreateBannerForm onSubmit={handleBannerForm}>
        <input type="file" name="bannerName" />
        <button type="submit">submit</button>
      </CreateBannerForm> */}
    </HomeContainer>
  );
}
