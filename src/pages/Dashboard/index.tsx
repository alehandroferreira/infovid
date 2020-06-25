import React from "react";

import logoImg from "../../assets/logo.png";
import covid01 from "../../assets/covid01.png";

import { Header } from "./styles";
import { Project } from "./styles";
import { Cases } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <Header>
        <img src={logoImg} alt="Infovid" />
        <ul>
          <li>
            <a href="">Brasil</a>
          </li>
          <li>
            <a href="">Mundo</a>
          </li>
          <li>
            <a href="">Rancking</a>
          </li>
        </ul>
      </Header>
      <Project>
        <img src={covid01} alt="Infovid" />
        <p>
          O projeto Infovid, tem como objetivo trazer informações sobre a real
          situação da Covid-19 no Brasil e no Mundo.
        </p>
      </Project>
      <Cases>
        <ul>
          <li>Brasil</li>
          <li>Casos confirmados: 1784</li>
          <li>Mortes confirmadas: 45</li>
        </ul>
        <ul>
          <li>Mundo</li>
          <li>Casos confirmados: 8524</li>
          <li>Mortes confirmadas: 456</li>
        </ul>
        <ul>
          <li>Rancking</li>
          <li>EUA: 1784</li>
          <li>Brasil: 744</li>
        </ul>
      </Cases>
    </>
  );
};

export default Dashboard;
