import styled from "styled-components";

export default function Baixo() {
  return (
    <DivBaixo>
      <p>0/4 Concluidos</p>
    </DivBaixo>
  );
}

const DivBaixo = styled.div`
  background-color: rgb(96, 96, 96);
  width:30vw;
  height: 10vh;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.25);
  position: fixed;
  bottom: 0;
  right:445px;
  z-index:1;
  display:flex;
  justify-content:center;
  align-items:center;
  p{
    color:rgb(224, 224, 224);
    font-size:20px;
  }
`;
