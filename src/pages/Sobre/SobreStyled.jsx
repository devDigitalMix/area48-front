import styled from "styled-components";

export const SobreContainer = styled.section`
  width: 100%;
`;
export const SobreMain = styled.div`
  display: grid;
  gap: 40px;
  width: 100%;
`;
export const Historia = styled.div`
  display: grid;
  gap: 30px;
  width: 100%;
  .img {
    display: block;
    background-color: grey;
    max-width: 765px;
    width: 100%;
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

  .title {
    &::after {
      background-color: transparent;
    }
  }

  .pilotosSlide {
    display: grid;
    gap: 20px;
    .slideContent {
      display: flex;
      gap: 20px;
      justify-content: center;
      span {
        display: none;
        width: 214px;
        height: 191px;
        background-color: grey;
        &.active {
          display: block;
        }
      }
    }
    .slideBtns {
      display: flex;
      justify-content: center;
      gap: 15px;
      button {
      }
    }
  }
`;
