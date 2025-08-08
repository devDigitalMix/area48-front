import styled from "styled-components";

export const NavContainer = styled.header`
  max-width: 1200px;
  width: 100%;
  padding: 40px 10px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;

  .relogio {
    background-color: var(--dark);
    border: 3px solid var(--sec);
    padding: 10px 15px;
    display: flex;
    gap: 15px;
    color: var(--light);
    box-shadow: 0 10px 20px -5px #000;
    transform: skew(-5deg);
    .relogio-text {
      max-width: 130px;
      h3 {
        font-size: 24px;
        font-weight: 800;
      }
      p {
        font-weight: 300;
        font-style: italic;
        color: #fefefed6;
        line-height: 1.2em;
      }
    }
    .relogio-times {
      display: flex;
      gap: 10px;
      justify-content: center;
      div {
        min-width: 51px;
        width: 100%;
        h3 {
          background: var(--main);
          max-width: 51px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 43px;
          font-size: 24px;
          font-weight: 800;
        }
        p {
          font-size: 12px;
          font-weight: 300;
          font-style: italic;
          color: #fefefed6;
          text-align: center;
        }
      }
    }
  }
`;

export const NavMenu = styled.div`
  width: 100%;
  color: var(--light);
  background-color: var(--dark);
  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: end;
    .navmenu {
      display: flex;
      justify-content: end;
      button {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 20px;
        font-weight: 500;
        padding: 10px 15px;
        background-color: var(--dark);
        &:hover {
          box-shadow: 0 -2px 0 var(--main) inset, 1px 0 0 #353434 inset,
            -1px 0 0 #353434 inset;
        }
      }
    }
  }
`;
