import { useEffect, useState } from "react";
import { ListaEventos } from "../../components/ListaEventos/ListaEventos";
import { GuardaColunas } from "../Home/HomeStyled";
import { getNewsService } from "../../services/newsService";
import {
  NormalNewsImage,
  NovidadesContainer,
  NovidadesContent,
  PageButtons,
} from "./NovidadesStyled";

export default function Novidades() {
  const [news, setNews] = useState([]);
  const [received, setReceived] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState(() => {
    const savedPage = localStorage.getItem("pages");
    return savedPage ? parseInt(savedPage, 10) : 0;
  });
  const [lista, setLista] = useState([]);
  const [totalNews, setTotalNews] = useState(0);

  //   async function getNews() {
  //     const response = await getNewsService();
  //     const newsList = response.data.results;
  //     setNews(newsList);
  //   }

  async function getNews(limit, offset, dir) {
    try {
      setReceived(false);
      setIsLoading(true);
      var response = {};
      if (offset != 0 && !offset) {
        offset = pages;
      } else {
        setPages(offset);
      }
      if (!dir) {
        response = await getNewsService(limit, pages);
      } else {
        response = await getNewsService(limit, offset);
      }

      setNews(response.data.results);
      setTotalNews(response.data.total);
      console.log(response.data.total);
      var c = 0;
      var tempList = [];
      while (c <= response.data.total / 4) {
        tempList.push(c);
        c++;
        console.log(c);
      }
      setLista(tempList);
      setIsLoading(false);
      setReceived(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <NovidadesContainer>
      <GuardaColunas>
        <NovidadesContent>
          <h3 className="title">Novidades</h3>
          <div className="novidades">
            {news.map((noticia) => (
              <div className="noticia">
                <NormalNewsImage
                  className="newsImage"
                  imagename={noticia.imageName}
                >
                  {/* <img src={noticia.imageName} alt={noticia.title} /> */}
                  <div className="tags">
                    {noticia.tags.map((tag) => (
                      <h3>{tag.name}</h3>
                    ))}
                  </div>
                </NormalNewsImage>
                <div className="noticia-content">
                  <h2>{noticia.title}</h2>
                  <p>{noticia.description}</p>
                </div>
              </div>
            ))}
          </div>
          <PageButtons>
            {lista
              .filter(
                (n, _, arr) =>
                  n === 0 ||
                  n === arr[arr.length - 1] ||
                  (n >= pages / 4 - 2 && n <= pages / 4 + 2)
              )
              .reduce((acc, n, index, filtered) => {
                const prev = filtered[index - 1];
                if (prev !== undefined && n - prev > 1) {
                  acc.push("...");
                }
                acc.push(n);
                return acc;
              }, [])
              .map((n, index) =>
                n === "..." ? (
                  <span key={`ellipsis-${index}`} style={{ margin: "0 5px" }}>
                    ...
                  </span>
                ) : (
                  <p
                    key={n}
                    className={pages / 4 == n ? "active" : ""}
                    onClick={() => getNews(4, n * 4, 1)}
                  >
                    {n + 1}
                  </p>
                )
              )}
          </PageButtons>
        </NovidadesContent>
        <span></span>
        <ListaEventos />
      </GuardaColunas>
    </NovidadesContainer>
  );
}
