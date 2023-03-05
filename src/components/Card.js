import { useState } from "react";
import styled from "styled-components";
import setaPlay from "../assets/images/seta_play.png";
import setaVirar from "../assets/images/seta_virar.png";
export default function Card({ id, pergunta, resposta }) {
  const [imagemBotao, setImagemBotao] = useState(setaPlay);
  const [textoCard, setTextoCard] = useState(`Pergunta ${id}`);
  const botao12 = [
    <>
      <Botao12>
        <img src={imagemBotao} alt="seta" />
      </Botao12>
    </>,
  ];
  const botao3 = [
    <>
      <Botoes3>
        <Botao3 fundo={"#ed4f2a"}>Não lembrei</Botao3>
        <Botao3 fundo={"#f38e2d"}>Quase não lembrei</Botao3>
        <Botao3 fundo={"#64bf39"}>Zap!</Botao3>
      </Botoes3>
    </>,
  ];
  const [botoes, setBotoes] = useState(botao12);
  

  return (
    <>
      <DivCard>
        <CardInicial key={id}>
          <p>{textoCard}</p>
          {botoes.map((b, i) => (
            <div key={i}>{b}</div>
          ))}
        </CardInicial>
      </DivCard>
    </>
  );
}

const DivCard = styled.div`
  background-color: rgb(16, 16, 16);
  width: 85%;
  height: 75px; //131px
  margin: 15px;
  border-radius: 5px;
  color: white;
  margin: 15px auto;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  position: relative;
`;

const CardInicial = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 13px;
  height: 100%;
  p {
    margin-bottom: 0; //80px
    font-size: 17px;
  }
`;

const Botao12 = styled.button`
  width: 10%;
  height: 30px;
  margin-top: 0; //80px
  background-color: rgb(16, 16, 16);
  border: thin solid rgb(16, 16, 16);
`;
const Botoes3 = styled.div`
  width: 100%;
  height: 45%;
  position: absolute;
  bottom: 0;
  left: 15px;
  display: flex;
  align-items: center;
`;

const Botao3 = styled.button`
  width: 27%;
  height: 37px;
  margin: 7px;
  background-color: ${({ fundo }) => fundo};
  border: thin solid ${({ fundo }) => fundo};
  border-radius: 5px;
  color: white;
  font-size: 15px;
`;
