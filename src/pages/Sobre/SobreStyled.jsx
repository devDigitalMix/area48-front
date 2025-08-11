import styled from "styled-components";

export const SobreContainer = styled.section``;
export const SobreMain = styled.div`
  display: grid;
  gap: 40px;
`;
export const Historia = styled.div`
  display: grid;
  gap: 30px;
  .img {
    display: block;
    background-color: grey;
    width: 765px;
    height: 470px;
  }
  .historia-content {
    max-width: 475px;
    display: grid;
    gap: 15px;
    font-size: 26px;
  }
`;
export const SobrePilotos = styled.div`
  max-width: 475px;
  display: grid;
  gap: 15px;
  p {
    font-size: 26px;
    max-width: 590px;
  }

  .pilotosSlide {
    display: grid;
    gap: 20px;
    .slideContent {
      display: none;
      gap: 20px;
      span {
        display: block;
        width: 214px;
        height: 191px;
        background-color: grey;
      }
      &.active {
        display: flex;
      }
    }
    .slideBtns {
      display: flex;
      justify-content: center;
      gap: 15px;
      button {
        display: block;
        width: 30px;
        padding: 10px;
        height: 2px;
        border-bottom: 2px solid grey;
        &.active {
          border-bottom: 2px solid #e59c2d;
        }
      }
    }
  }
`;
