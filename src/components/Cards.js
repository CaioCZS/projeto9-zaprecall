import styled from "styled-components";
import Card from "./Card";
export default function Cards({cards}) {
  return (
    <ContainerCards>
      {cards.map(c => <Card key={c.id} id={c.id} pergunta={c.question} resposta={c.answer} />)}
    </ContainerCards>
  );
}

const ContainerCards = styled.div`
  background-color: rgb(128, 128, 128);
  width: 100%;
  text-align: center;
`;


