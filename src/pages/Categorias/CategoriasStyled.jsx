import styled from "styled-components";

export const CategoriasContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 50px 10px;
`;
export const CategoriasBanner = styled.div`
  display: block;
  background-color: grey;
  max-width: 1200px;
  width: 100%;
  height: 513px;
`;
export const CategoriasContent = styled.div`
  max-width: 675px;
  display: grid;
  gap: 30px;
  h5 {
    font-size: 20px;
    a {
      color: #0044b7;
      display: inline;
      font-weight: 700;
      text-decoration: underline;
      &:hover {
        color: var(--main);
      }
    }
  }
  .categorias-title {
    max-width: 620px;
    .title {
      &::after {
        background-color: transparent;
      }
    }
    p {
      font-size: 26px;
      line-height: 1.35em;
    }
  }
  .categorias-itens {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 30px;
    width: 100%;
    @media only screen and (max-width: 660px) {
      grid-template-columns: 1fr;
      justify-items: center;
      gap: 35px;
    }
    .categoria-item {
      display: grid;
      gap: 15px;
      max-width: 305px;
      width: 100%;
      .title {
        font-size: 28px;
        width: 100%;
      }
      p {
        color: #181612d3;
        i {
          font-weight: 600;
          color: #181612b0;
        }
      }
      span {
        max-width: 305px;
        width: 100%;
        background-color: grey;
        height: 244px;
      }
    }
  }
`;
