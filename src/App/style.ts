import styled from "styled-components";

// import imgPerfumDesktop from '../../public/images/image-product-desktop.jpg';
// import imgPerfumMobile from '../../public/images/image-product-mobile.jpg';

export const Container = styled.div`
  width: 100%;
  max-width: 600px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-radius: 12px;

  background-color: white;

  @media (max-width: 520px) {
    flex-direction: column;
    border-radius: 0;
    border-end-end-radius: 12px;
    border-end-start-radius: 12px;
  }
`;

export const Content = styled.div`
  width: 100%;

  padding: 25px;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 18px;

  span {
    color: #808080;
    font-size: 0.8rem;
  }

  h1 {
    font-family: var(--Fraunces);
    font-size: 2.3rem;
    line-height: 94%;
  }

  p {
    color: #505050;
    font-size: 0.95rem;
    line-height: 140%;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    strong {
      font-family: var(--Fraunces);
      font-size: 1.9rem;
      color: var(--DarkCyan);

      margin-right: 10px;
    }

    span {
      font-size: 0.9rem;
      text-decoration: line-through;
    }
  }

  button {
    padding: 15px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 8px;
    color: white;
    font-size: 0.8rem;
    font-weight: 600;

    background-color: var(--DarkCyan);

    cursor: pointer;
    transition: opacity 0.14s ease;

    img {
      margin-right: 8px;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 520px) {
    padding: 20px;
  }
`;

export const photoProduct = styled.div`
  width: 100%;

  background-image: url("../../public/images/image-product-desktop.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  border-top-left-radius: 10px;
  border-end-start-radius: 10px;

  @media (max-width: 520px) {
    background-image: url("../../public/images/image-product-mobile.jpg");

    min-height: 240px;

    border-radius: 0;

    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
`;
