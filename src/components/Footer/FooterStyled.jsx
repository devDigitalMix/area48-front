import styled from "styled-components";

export const FooterSection = styled.section`
  background: url(/footer-bg.webp) no-repeat center center;
  background-size: cover;
  padding: 80px 10px;
  display: grid;
  justify-items: center;
  gap: 30px;
  .redes,
  .footerMenu {
    display: flex;
    justify-content: center;
    gap: 18px;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: var(--light);
    letter-spacing: 1.5px;
    flex-wrap: wrap;
    button:hover {
      color: var(--main);
    }
    a:hover {
      filter: drop-shadow(0 0 4px var(--main));
    }
  }
`;
