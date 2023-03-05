import styled from "styled-components";
import cards from "../cards";
export default function Baixo({quantidadeCartas}) {
  return (
    <DivBaixo>
      <p>{`0/${quantidadeCartas} Concluidos`}</p>
    </DivBaixo>
  );
}

const DivBaixo = styled.div`
  background-color: rgb(96, 96, 96);
  width:100%;
  height: 10vh;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.25);
  z-index:1;
  display:flex;
  justify-content:center;
  align-items:center;
  p{
    color:rgb(224, 224, 224);
    font-size:20px;
  }
`;
