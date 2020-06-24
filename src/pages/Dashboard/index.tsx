import React from "react";

import logoImg from "../../assets/logo.png";

import { Title } from "./styles";
import { Description } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Infovid" />
      <Title>Informações do avanço da Covid-19 no Brasil e no mundo.</Title>
      <Description>
        Projeto com o intuito de trazer a informação de forma responsável a
        todos que acessem nossa pagina.
      </Description>
    </>
  );
};

export default Dashboard;
