import styled from "styled-components";
import Card from "./Card";
export default function Cards({
  setTodosRespondidos,
  cards,
  adicionarFinalizadas,
}) {
  return (
    <ContainerCards>
      {cards.map((c,i) => (
        <Card
          setTodosRespondidos={setTodosRespondidos}
          adicionarFinalizadas={adicionarFinalizadas}
          key={i}
          index={i}
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
