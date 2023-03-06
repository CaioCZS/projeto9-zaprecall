import styled from "styled-components";
export default function Baixo({finalizadas,quantidadeCartas}) {
  const feitos=finalizadas.length;
  return (
    <DivBaixo data-test="footer">
      <p>{`${feitos}/${quantidadeCartas} Concluidos`}</p>
    </DivBaixo>
  );
}

const DivBaixo = styled.div`
  background-color: #FFFFFF;//rgb(96, 96, 96);
  width:100%;
  min-height: 10vh;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.25);
  z-index:1;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  p{
    color:#333333;//rgb(224, 224, 224);
    font-size:20px;
  }
`;
