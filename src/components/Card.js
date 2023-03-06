import { useState } from "react";
import styled from "styled-components";
import setaPlay from "../assets/images/seta_play.png";
import setaVirar from "../assets/images/seta_virar.png";
import certo from "../assets/images/icone_certo.png";
import erro from "../assets/images/icone_erro.png";
import quase from "../assets/images/icone_quase.png";

export default function Card({
  index,
  pergunta,
  resposta,
  adicionarFinalizadas,
}) {
  const [textoCard, setTextoCard] = useState(`Pergunta ${index + 1}`);
  const [tamanhoCard, setTamanhoCard] = useState("75px");
  const [margemBtn, setMargemBtn] = useState("0px");
  const [margemP, setMargemP] = useState("0px");
  const [corP, setCorP] = useState("#FFFFFF");
  const [corFundo, setCorFundo] = useState("rgb(16, 16, 16)");

  const botao12 = [
    <Botao12
      data-test="play-btn"
      corFundo={corFundo}
      margem={false}
      onClick={() => virarCard(setaPlay)}
    >
      <img src={setaPlay} alt="seta" />
    </Botao12>,
  ];
  const verde = "#64bf39";
  const amarelo = "#f38e2d";
  const vermelho = "#ed4f2a";
  const botao3 = [
    <>
      <Botoes3>
        <Botao3
          fundo={vermelho}
          data-test="no-btn"
          onClick={() => fecharCartao(vermelho)}
        >
          Não lembrei
        </Botao3>
        <Botao3
          fundo={amarelo}
          data-test="partial-btn"
          onClick={() => fecharCartao(amarelo)}
        >
          Quase não lembrei
        </Botao3>
        <Botao3
          fundo={verde}
          data-test="zap-btn"
          onClick={() => fecharCartao(verde)}
        >
          Zap!
        </Botao3>
      </Botoes3>
    </>,
  ];
  const [botoes, setBotoes] = useState(botao12);
  function fecharCartao(cor) {
    setTextoCard(`Pergunta ${index + 1}`);
    setTamanhoCard("75px");
    setCorFundo("rgb(16,16,16)");
    let icone;
    let test;
    if (cor === verde) {
      icone = certo;
      test = "zap-icon";
    } else if (cor === amarelo) {
      icone = quase;
      test = "partial-icon";
    } else {
      icone = erro;
      test = "no-icon";
    }
    const nvBtn = [
      <Botao12 corFundo={corFundo}>
        <img src={icone} data-test={test} alt="icone" />
      </Botao12>,
    ];
    setBotoes(nvBtn);
    setMargemP("0px");
    setCorP(cor);
    adicionarFinalizadas(icone);
  }
  function virada1() {
    setTamanhoCard("131px");
    setTextoCard(pergunta);
    const nvBtn = [
      <Botao12 data-test="turn-btn" onClick={() => virarCard(setaVirar)}>
        <img src={setaVirar} alt="seta" />
      </Botao12>,
    ];
    setBotoes(nvBtn);
    setMargemBtn("80px");
    setMargemP("80px");
  }
  function virada2() {
    setTextoCard(resposta);
    setBotoes(botao3);
    setMargemBtn("0px");
  }
  function virarCard(btn) {
    setCorFundo("rgb(96,96,96)");
    if (btn === setaPlay) {
      virada1();
    } else {
      virada2();
    }
  }
  return (
    <>
      <DivCard tamanhoCard={tamanhoCard} corP={corP} corFundo={corFundo}>
        <CardInicial
          data-test="flashcard"
          key={index}
          corP={corP}
          margemBtn={margemBtn}
          margemP={margemP}
        >
          <p data-test="flashcard-text">{textoCard}</p>
          {botoes.map((b, i) => (
            <div key={i}>{b}</div>
          ))}
        </CardInicial>
      </DivCard>
    </>
  );
}

const DivCard = styled.div`
  background-color: ${({ corFundo }) => corFundo};
  width: 85%;
  height: ${({ tamanhoCard }) => tamanhoCard};
  margin: 15px;
  border-radius: 5px;
  color: ${({ corP }) => corP};
  margin: 15px auto;
  box-shadow: 0px -6px 10px rgba(0, 0, 0, 0.35);
  position: relative;
`;

const CardInicial = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 13px;
  height: 100%;
  p {
    margin-bottom: ${({ margemP }) => margemP};
    font-size: 16px;
    text-decoration: ${({ corP }) => corP !== "#FFFFFF" && "line-through"};
  }
  button {
    margin-top: ${({ margemBtn }) => margemBtn};
  }
`;

const Botao12 = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${({ corFundo }) =>
    corFundo ? corFundo : "rgb(96,96,96)"};
  border: thin solid
    ${({ corFundo }) => (corFundo ? corFundo : "rgb(96,96,96)")};
`;
const Botoes3 = styled.div`
  width: 100%;
  height: 45%;
  position: absolute;
  bottom: 0;
  left: 15px;
  display: flex;
  align-items: center;
  margin-top: 50px;
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
