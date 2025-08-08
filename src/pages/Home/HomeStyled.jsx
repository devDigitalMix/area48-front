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
  & > span {
    width: 2px;
    display: block;
    background-color: #00000049;
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

export const ListaEventos = styled.section`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  max-width: 350px;
  width: 100%;
  & > span {
    margin-top: 10px;
    display: block;
    width: 100%;
    height: 2px;
    background-color: #00000037;
  }
  & > p {
    color: #181612d5;
  }
  .eventos-title {
    display: grid;
    gap: 10px;
    .eventSelector {
      display: flex;
      gap: 10px;
      button {
        max-width: fit-content;
        font-weight: 700;
        color: #0000006a;
        padding: 4px 10px;
        box-shadow: 0 0 0 1px #d9090c65 inset;
        &.active {
          box-shadow: 0 0 10px 15px var(--main) inset;
          color: var(--light);
        }
      }
    }
    h2 {
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
        position: absolute;
        left: 0;
        bottom: -1px;
        content: "";
        width: 56px;
        height: 4px;
        background-color: var(--sec);
      }
    }
  }
  .eventoContent {
    position: relative;
    max-width: fit-content;
    height: fit-content;
    .relogio {
      position: absolute;
      bottom: 0;
      background-color: #000000c8;
      border: 2px solid var(--sec);
      padding: 15px 15px;
      display: flex;
      justify-content: center;
      gap: 25px;
      width: 100%;
      backdrop-filter: blur(2px);
      color: var(--light);
      .relogio-text {
        max-width: 130px;
        h3 {
          font-size: 24px;
          font-weight: 900;
          color: var(--main);
        }
      }
      .relogio-times {
        display: grid;
        gap: 3px;
        justify-items: start;
        & > div {
          display: flex;
          gap: 15px;
          h3 {
            font-size: 40px;
            font-weight: 600;
            line-height: 0.8em;
            span {
              font-size: 20px;
            }
          }
          div {
            width: 100%;
            h3 {
              font-size: 16px;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
  .eventoInfo {
    display: grid;
    gap: 6px;
    h3 {
      font-size: 24px;
      font-weight: 700;
    }
    p {
      color: #181612cf;
    }

    ul {
      display: grid;
      gap: 13px;
      li {
        background-color: var(--sec);
        font-weight: 700;
        padding: 4px 12px;
        max-width: fit-content;
        color: var(--light);
      }
    }
  }
`;
