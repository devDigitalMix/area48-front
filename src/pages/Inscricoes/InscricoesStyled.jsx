import styled from "styled-components";

export const InscricoesContainer = styled.section``;
export const InscricoesContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  max-width: 650px;
  gap: 15px;
  & > p {
    font-size: 26px;
    color: #181612d1;
    @media only screen and (max-width: 450px) {
      font-size: 22px;
    }
  }
  div {
    display: grid;
    gap: 11px;
    max-width: 425px;
    width: 100%;
    margin-top: 25px;
    .btn {
      @media only screen and (max-width: 410px) {
        text-align: center;
        padding: 10px 20px;

        font-size: 20px;
      }
    }
    p {
      a {
        display: inline;
        color: var(--sec);
        font-weight: 700;
        text-decoration: underline;
      }
    }
  }
`;
