import { useParams } from "react-router-dom";
import { News, NormalNewsImage, NoticiaContainer } from "./NoticiaStyled";
import { useEffect, useState } from "react";
import { getNewsByIdService } from "../../services/newsService";
import { GuardaColunas } from "../Home/HomeStyled";
import { ListaNews } from "../../components/ListaNews/ListaNews";

export default function Noticia() {
  const { id } = useParams();
  const [news, setNews] = useState({});
  const [received, setReceived] = useState(false);

  async function getNews() {
    setReceived(false);
    const response = await getNewsByIdService(id);
    setNews(response.data);
    setReceived(true);
  }

  function formatarDataIsoParaBR(dataIso) {
    const data = new Date(dataIso);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Link copiado!"))
      .catch(() => alert("Falha ao copiar o link"));
  }

  const currentUrl = window.location.href;

  useEffect(() => {
    getNews();
  }, [id]);

  return (
    <NoticiaContainer>
      <GuardaColunas>
        {received && news && (
          <News>
            <div className="newsHeader">
              {news.tags.length > 0 && (
                <div className="tags">
                  {news.tags.map((tag, index) => (
                    <h2 key={index}>{tag.name}</h2>
                  ))}
                </div>
              )}
              <h1>{news.title}</h1>
              <p>{formatarDataIsoParaBR(news.postedDate)}</p>
            </div>
            <img src={news.imageName} className="newsImage" />
            <p>{news.description}</p>

            <div className="share">
              <h4>COMPARTILHE</h4>
              <div>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    currentUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/face-share.svg" alt="facebook" />
                </a>

                <a
                  href={`https://wa.me/?text=${encodeURIComponent(currentUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/whats-share.svg" alt="whatsapp" />
                </a>

                <button
                  onClick={() => copyToClipboard(currentUrl)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <img src="/copy.svg" alt="copiar" />
                </button>
              </div>
            </div>
          </News>
        )}
        <span></span>
        <ListaNews />
      </GuardaColunas>
    </NoticiaContainer>
  );
}
