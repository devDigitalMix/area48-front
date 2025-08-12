import styled from "styled-components";

export const NovidadesContainer = styled.section``;
export const NovidadesContent = styled.div`
  display: grid;
  gap: 10px;
  margin-right: 60px;
  .novidades {
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr 1fr;
    .noticia {
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
      h2 {
        font-size: 24px;
        font-weight: 700;
        line-height: 1.2em;

        display: -webkit-box;
        -webkit-line-clamp: 2; /* Número de linhas visíveis */
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      p {
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
export const PageButtons = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  p {
    padding: 5px;
    cursor: pointer;
    height: 41px;
    width: 47px;
    font-size: 20px;
    font-weight: 900;
    transition: all.3s;
    color: #181612ab;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 0 1px #181612ab inset;
    &.active {
      box-shadow: 0 0 5px 20px var(--main) inset;
      color: var(--light);
    }
  }
  /* div {
    display: flex;
    align-items: center;
    gap: 10px;
  } */
`;
