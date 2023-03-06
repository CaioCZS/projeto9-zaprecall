import styled from "styled-components";
import Card from "./Card";
export default function Cards({
  setTodosRespondidos,
  cards,
  adicionarFinalizadas,
}) {
  return (
    <ContainerCards>
      {cards.map((c) => (
        <Card
          setTodosRespondidos={setTodosRespondidos}
          adicionarFinalizadas={adicionarFinalizadas}
          key={c.id}
          id={c.id}
          pergunta={c.question}
          resposta={c.answer}
        />
      ))}
    </ContainerCards>
  );
}

const ContainerCards = styled.div`
  width: 100%;
  text-align: center;
`;
