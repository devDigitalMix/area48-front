import styled from "styled-components";

export const HomeContainer = styled.section`
  width: 100%;
`;

export const HomeContent = styled.div`
  background: ${({ bannersrc }) => `url(${bannersrc}) no-repeat center center`};
  background-size: cover;
  & > div {
    backdrop-filter: blur(15px);
    width: 100%;
    display: flex;
    justify-content: center;
  }
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const CreateBannerForm = styled.form``;

export const GuardaColunas = styled.section`
  padding: 60px 10px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  & > span {
    width: 2px;
    display: block;
    background-color: #00000049;
  }
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
`;

export const HomeNoticias = styled.div`
  display: grid;
  gap: 30px;
  max-width: 725px;
  .mainNews {
    display: flex;
    align-items: start;
    gap: 30px;

    .mainNoticia {
      max-width: 350px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      gap: 10px;
      cursor: pointer;
      transition: all.3s;
      & > h3 {
        font-size: 36px;
        font-weight: 700;
        width: 100%;
        position: relative;
        &::after {
          display: block;
          content: "";
          width: 100%;
          height: 2px;
          background-color: #00000037;
        }
        &::before {
          display: block;
          transition: all.3s;
          position: absolute;
          left: 0;
          bottom: -1px;
          content: "";
          width: 56px;
          height: 4px;
          background-color: var(--main);
        }
      }

      .newsImage {
        height: 244px;
        max-width: 350px;
        width: 100%;
        margin: 5px 0;
        display: flex;
        justify-content: start;
        align-items: end;
        display: grid;
        grid-template-areas: "stack";
        & > * {
          grid-area: stack;
        }
        .tags {
          display: flex;
          gap: 15px;
          h3 {
            background-color: var(--main);
            color: var(--light);
            padding: 0 10px;
          }
        }
      }
      &:hover {
        & > h3 {
          &::before {
            width: 100%;
          }
        }
      }
      h2 {
        font-size: 24px;
        font-weight: 700;
        line-height: 1.2em;
      }
      p {
        display: -webkit-box;
        -webkit-line-clamp: 3; /* Número de linhas visíveis */
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
  .normalNews {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
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
  }
  @media only screen and (max-width: 790px) {
    .mainNews {
      .mainNoticia {
        max-width: 230px;
        & > h3 {
          font-size: 26px;
        }
        .newsImage {
          height: 162px;
          max-width: 230px;
          width: 100%;
        }
      }
    }
    .normalNews {
      grid-template-columns: 1fr;
      .noticia {
        max-width: 400px;
      }
    }
  }
  @media only screen and (max-width: 530px) {
    .mainNews {
      flex-direction: column;
      justify-content: start;
      .mainNoticia {
        max-width: 350px;
        .newsImage {
          height: 244px;
          max-width: 350px;
          width: 100%;
        }
      }
    }
  }
`;

export const NormalNewsImage = styled.div`
  background: ${({ imagename }) => `url(${imagename}) no-repeat center center`};
  background-size: cover;
`;

export const ModalUpdateNews = styled.form`
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  z-index: 10;
  background-color: var(--dark);
  color: var(--light);
  padding: 30px;
  border: 2px solid var(--sec);
  display: grid;
  gap: 15px;
  & > span {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: var(--light);
    color: var(--dark);
    &:hover {
      background-color: var(--main);
      color: var(--light);
    }
  }
`;

export const Patrocinadores = styled.section`
  background: url(/patrocinadores-bg.webp) no-repeat center center;
  background-size: cover;
  padding: 50px 0;
  h3 {
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    color: var(--light);
  }
  & > span {
    display: block;
    background-color: var(--main);
    width: 56px;
    height: 4px;
    margin: 10px auto 40px;
  }
  p {
    font-style: italic;
    color: var(--light);
    text-align: center;
    margin-top: 60px;
  }
`;
export const Move = styled.div`
  height: 80px;
  background: url(/move.webp) repeat-x left center;
  background-position: ${({ positionx }) =>
    positionx ? `${positionx}px center` : "0 center"};
`;

// Base para todas as seções
const SectionBase = styled.section`
  background-size: cover;
  padding: 100px 10px;

  .ingressosHome {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
  }

  .ingressosContent {
    display: grid;
    gap: 15px;
    max-width: 510px;

    h3 {
      font-size: 36px;
      font-weight: 700;
      position: relative;
      max-width: fit-content;
      margin-bottom: 10px;

      &::after {
        display: block;
        content: "";
        width: 100%;
        height: 2px;
        background-color: #00000037;
      }
      &::before {
        display: block;
        position: absolute;
        left: 0;
        bottom: -1px;
        content: "";
        width: 56px;
        height: 4px;
        background-color: var(--main);
      }
    }

    p {
      font-size: 24px;
      line-height: 1.3em;

      a {
        color: #0044b7;
        display: inline;
        font-weight: 700;
        text-decoration: underline;
      }

      i {
        font-weight: 500;
      }
    }
  }

  @media only screen and (max-width: 940px) {
    padding: 80px 10px;
    .ingressosHome {
      flex-direction: column;
      align-items: center;
      gap: 50px;
    }
  }

  @media only screen and (max-width: 430px) {
    .btn {
      font-size: 20px;
      padding: 10px 15px;
    }
  }
`;

// Versões específicas
export const IngressosHome = styled(SectionBase)`
  background: url(/ingressos-bg.webp) no-repeat right center;
  background-size: cover;
  padding-bottom: 0;
  @media only screen and (max-width: 800px) {
    box-shadow: 0 0 400px 400px #ffffff89 inset;
  }
`;

export const InscricoesHome = styled(SectionBase)`
  background: url(/inscricoes-bg.webp) no-repeat left top;
  background-size: cover;
  .ingressosHome {
    justify-content: end;
  }
  .ingressosContent {
    gap: 20px;
    h3 {
      color: var(--light);
    }
    h4 {
      margin-top: 10px;
      color: #fefefed1;
      position: relative;
      top: 12px;
    }
    p {
      color: #fefefed1;
    }
  }

  @media only screen and (max-width: 800px) {
    box-shadow: 0 0 400px 400px #00000096 inset;
  }
`;

export const CategoriasHome = styled(SectionBase)`
  background: url(/categorias-bg.webp) no-repeat right center;
  background-size: cover;

  .ingressosContent {
    gap: 20px;
    h3 {
      color: var(--dark);
    }
    p {
      color: #181612d1;
    }
  }
  .btn {
    margin-top: 15px;
  }

  @media only screen and (max-width: 800px) {
    box-shadow: 0 0 400px 400px #ffffff89 inset;
  }
`;
