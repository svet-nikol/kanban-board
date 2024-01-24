import Card from "../Card/Card";
import { ColumnItem, Title, TitleText, Cards } from "./Column.styled.js";

function Column({ title, cardList }) {
  return (
    <ColumnItem>
      <Title>
        <TitleText>{title}</TitleText>
      </Title>
      <Cards>
        {cardList.map((card) => (
          <Card
            id={card._id}
            theme={card.topic}
            name={card.title}
            deadline={card.date}
            key={card._id}
          />
        ))}
      </Cards>
    </ColumnItem>
  );
}

export default Column;
