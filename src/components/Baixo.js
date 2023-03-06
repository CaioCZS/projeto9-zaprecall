import styled from "styled-components";
import certo from "../assets/images/icone_certo.png";
import quase from "../assets/images/icone_quase.png";
import festa from "../assets/images/party.png";
import erro from "../assets/images/icone_erro.png"
import sad from "../assets/images/sad.png";
export default function Baixo({ finalizadas, quantidadeCartas ,todosRespondidos}) {
  const feitos = finalizadas.length;
  const imgResultado = (todosRespondidos && finalizadas.includes(erro)) ? sad : todosRespondidos ? festa : "" ;
  const textoResultado =(todosRespondidos && finalizadas.includes(erro)) ? "Putz..." : todosRespondidos ? "Parabéns!" : "" ;
  const textoMotivacao = (todosRespondidos && finalizadas.includes(erro)) ? "Ainda faltam alguns... Mas não desanime!" : todosRespondidos ? "Você não esqueceu de nenhum flashcard!" : "" ;
  return (
    <DivBaixo todosRespondidos={todosRespondidos} data-test="footer">
      <div data-test="finish-text">
      <MensagemResultado>
        <img src={imgResultado} alt="icone" />
        <p>{textoResultado}</p>
      </MensagemResultado>
      <MensagemMotivaçao>
        {textoMotivacao}
      </MensagemMotivaçao>
      </div>
      <p>{`${feitos}/${quantidadeCartas} Concluidos`}</p>
      <Icones>
        {finalizadas.map((icone, index) => (
          <img
            src={icone}
            alt="icone"
            key={index}
            data-test={
              icone === certo
                ? "zap-icon"
                : icone === quase
                ? "partial-icon"
                : "no-icon"
            }
          />
        ))}
      </Icones>
    </DivBaixo>
  );
}

const DivBaixo = styled.div`
  background-color: #ffffff; //rgb(96, 96, 96);
  width: 100%;
  height: ${({todosRespondidos}) => todosRespondidos ? "25vh" : "10vh"};///25vh; //10vh;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.25);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 15px;
  p {
    color: #333333; //rgb(224, 224, 224);
    font-size: 20px;
    margin: 10px;
  }
  text-align: center;
`;

const Icones = styled.div`
  display: flex;
  img {
    margin:0px 0px 10px 2px;
  }
`;
const MensagemMotivaçao = styled.p`
  width: 222px;
  margin: 0;
`;
const MensagemResultado = styled.div`
  display: flex;
  justify-content:center;
  img {
    margin-right: 10px;
  }
  p {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
  }
`;
