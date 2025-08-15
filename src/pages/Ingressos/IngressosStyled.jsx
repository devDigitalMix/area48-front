import styled from "styled-components";

export const IngressosContainer = styled.section`
  max-width: 1200px;
  width: 100%;
  padding: 50px 10px 100px;
  margin: 0 auto;
  display: grid;
  justify-items: start;
  gap: 15px;

  @media only screen and (max-width: 1070px) {
    justify-items: center;
  }
`;
export const IngressosContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 42px;
  @media only screen and (max-width: 1070px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
export const UmIngresso = styled.div`
  display: grid;
  gap: 3px;
  max-width: 487px;
  span {
    max-width: 487px;
    width: 100%;
    height: 244px;
    background-color: grey;
  }
  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-top: 8px;
  }
  p {
    font-size: 20px;
  }
  .btn {
    margin-top: 15px;
    @media only screen and (max-width: 430px) {
      text-align: center;
      padding: 10px 20px;

      font-size: 20px;
    }
  }
`;
