import styled from "styled-components";

export const ContatosContainer = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;
export const ContatosContent = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 20px;
  .contato {
    h2 {
      font-size: 24px;
      font-weight: 700;
    }
    p {
      color: #181612ce;
      a {
        display: inline;
        color: var(--sec);
        font-weight: 700;
        text-decoration: underline;
      }
    }
  }
  .redes {
    display: grid;
    gap: 10px;
    font-size: 24px;
    font-weight: 700;
    div {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }
`;
