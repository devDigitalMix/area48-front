import { useEffect, useState } from "react";

import { getLatestNews } from "../../services/newsService";
import { ListaNewsEstilo, NormalNewsImage } from "./ListaNewsStyled";
import { useNavigate } from "react-router-dom";

export function ListaNews() {
  const [news, setNews] = useState([]);
  const [mainNews, setMainNews] = useState({});
  const [received, setReceived] = useState(false);
  const navigate = useNavigate();

  function formatarDataIsoParaBR(dataIso) {
    const data = new Date(dataIso);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }

  async function getNews() {
    setReceived(false);
    const response = await getLatestNews();
    const lista = response.data;
    setMainNews(lista[0]);
    setNews(lista.slice(1));
    setReceived(true);
  }

  useEffect(() => {
    getNews();
  }, []);
  return (
    <ListaNewsEstilo>
      <div className="news-title">
        <h3 className="title">Últimas Notícias</h3>
        <div
          className="mainNews"
          onClick={() => navigate("/noticia/" + mainNews._id)}
        >
          <NormalNewsImage className="newsImage" imagename={mainNews.imageName}>
            <div className="tags">
              {received &&
                mainNews.tags.length > 0 &&
                mainNews.tags.map((tag) => <h3>{tag.name}</h3>)}
            </div>
          </NormalNewsImage>
          <h3>{mainNews.title}</h3>
          <p>{mainNews.description}</p>
        </div>
      </div>
      <div className="newsContent">
        {news.length > 0 &&
          news.map((noticia, index) => (
            <div
              className="noticia"
              key={index}
              onClick={() => navigate("/noticia/" + noticia._id)}
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
    </ListaNewsEstilo>
  );
}
