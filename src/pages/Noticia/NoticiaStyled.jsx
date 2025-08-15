import styled from "styled-components";

export const NoticiaContainer = styled.section``;
export const News = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20px;
  .newsHeader {
    display: grid;
    gap: 7px;
    h1 {
      font-size: 36px;
      font-weight: 700;
      line-height: 1.2em;
      color: var(--dark);
    }
    p {
      color: #181612d3;
    }
    position: relative;
  }
  .tags {
    display: flex;
    gap: 10px;
    position: absolute;
    top: -10px;
    left: 0;
    transform: translate(0, -100%);
    h2 {
      background-color: var(--main);
      color: var(--light);
      padding: 3px 12px;
      text-transform: uppercase;
      font-weight: 700;
    }
  }
  & > p {
    font-size: 20px;
    color: #181612d3;
  }
  .newsImage {
    max-width: 800px;
  }
  .share {
    display: grid;
    gap: 10px;
    h4 {
      font-size: 20px;
      font-weight: 700;
    }
    div {
      display: flex;
      gap: 20px;
    }
  }
`;
export const NormalNewsImage = styled.div`
  background: ${({ imagename }) => `url(${imagename}) no-repeat center center`};
  background-size: cover;
  max-width: 716px;
  width: 100%;
  height: 513px;
`;
