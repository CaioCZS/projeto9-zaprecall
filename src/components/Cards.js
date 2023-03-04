import styled from "styled-components";

export default function Cards() {
  return (
    <ContainerCards>
      <Card>Pergunta</Card>
      <Card>Pergunta</Card>
      <Card>Pergunta</Card>
      <Card>Pergunta</Card>
      <Card>Pergunta</Card>
      <Card>Pergunta</Card>
    </ContainerCards>
  );
}

const ContainerCards = styled.div`
  background-color: rgb(128, 128, 128);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  background-color: rgb(32, 32, 32);
  width: 300px;
  height: 85px;
  margin: 15px;
  border-radius: 5px;
  color:white;
`;
