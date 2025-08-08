import styled from "styled-components";

export const NavContainer = styled.header`
  max-width: 1200px;
  width: 100%;
  padding: 40px 10px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;

  @media only screen and (max-width: 700px) {
    justify-content: center;
    flex-wrap: wrap;
  }

  .relogio {
    background-color: var(--dark);
    border: 3px solid var(--sec);
    padding: 10px 15px;
    display: flex;
    gap: 15px;
    color: var(--light);
    box-shadow: 0 10px 20px -5px #000;
    transform: skew(-5deg);
    @media only screen and (max-width: 440px) {
      flex-wrap: wrap;
      justify-content: center;
    }
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
      @media only screen and (max-width: 440px) {
        p {
          display: none;
        }
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

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  z-index: 1001;
  position: absolute;
  top: 10px;
  right: 10px;

  span {
    width: 30px;
    height: 4px;
    background: var(--dark);
    border-radius: 3px;
    transition: all 0.3s ease;
  }

  ${({ open }) =>
    open &&
    `
    span:nth-child(1) {
      transform: rotate(45deg) translate(8px, 8px);
    }
    span:nth-child(2) {
      transform: rotate(45deg) translate(1.2px, 1.2px);
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
    }
    span {
    background: var(--light);
  }
  `}

  @media (max-width: 720px) {
    display: flex;
  }
`;

export const NavMenu = styled.div`
  width: 100%;
  color: var(--light);
  background-color: var(--dark);
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  overflow: hidden;

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

  @media (max-width: 720px) {
    max-height: ${({ open }) => (open ? "420px" : "0")};
    padding-top: ${({ open }) => (open ? "50px" : "0")};
    padding-bottom: ${({ open }) => (open ? "30px" : "0")};
    opacity: ${({ open }) => (open ? "1" : "0")};
    position: absolute;
    top: 0;
    z-index: 10;
    transition: all.3s;

    .container {
      justify-content: center;
      .navmenu {
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;
