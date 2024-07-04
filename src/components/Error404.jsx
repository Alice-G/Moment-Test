import React from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5%;

  gap: 50px;

  @media (min-width: 769px) and (max-width: 1199px) {
    gap: 40px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 375px) {
    gap: 15px;
  }
`;

const Title = styled.h1`
  color: ${colors.raisin_black};
  font-family: ${fonts.font_pagetitle}, serif;
  font-size: 2.5em;
  background-color: ${colors.color_primary02};
`;
const ErrorText = styled.p`
  padding: 0 50px;
  width: 70%;
  text-align: center;

  font-size: 36px;
`;
const ErrorBacklink = styled.a`
  font-size: 18px;
`;

export default function Error404() {
  return (
    <ErrorContainer>
      <Title>404</Title>
      <ErrorText>Oups! La page que vous demandez n'existe pas.</ErrorText>
      <ErrorBacklink href="/">Retourner sur la page d’accueil</ErrorBacklink>
    </ErrorContainer>
  );
}
