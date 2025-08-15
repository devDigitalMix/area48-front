import styled from "styled-components";

export const ListaNewsEstilo = styled.div`
  display: grid;
  gap: 40px;
  .mainNews {
    display: grid;
    gap: 5px;
    h3 {
      font-size: 24px;
      font-weight: 700;
      line-height: 1.3em;
      margin-top: 15px;
    }
    p {
      color: #181612d8;
    }
    .newsImage {
      height: 300px;
      max-width: 340px;
      width: 100%;
      position: relative;
      .tags {
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        gap: 15px;
        h3 {
          background-color: var(--main);
          color: var(--light);
          padding: 0 10px;
        }
      }
    }
  }
  .noticia {
    display: flex;
    transition: all.3s;
    gap: 10px;
    cursor: pointer;
    max-width: 350px;
    width: 100%;
    padding: 5px;
    .newsImage {
      height: 134px;
      max-width: 150px;
      min-width: 150px;
      width: 100%;
      overflow: hidden;
      transition: all.3s;
      position: relative;
    }
    &:hover {
      box-shadow: 0 5px 10px #0000005e;
      .newsImage {
        max-width: 0;
        min-width: 0;
      }
    }
    .noticia-content {
      padding-top: 7px;
      p {
        font-size: 14px;
        color: #181612b0;
      }
      h2 {
        font-size: 20px;
        line-height: 1.3em;
        font-weight: 700;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* Número de linhas visíveis */
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
`;
export const NormalNewsImage = styled.div`
  background: ${({ imagename }) => `url(${imagename}) no-repeat center center`};
  background-size: cover;
`;
