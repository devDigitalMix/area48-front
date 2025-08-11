import styled from "styled-components";

export const ListaEventosEstilo = styled.section`
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
