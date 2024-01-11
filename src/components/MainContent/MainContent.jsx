import Column from "../Column/Column";
import { Main, MainBlock, MainContentSt } from "./MainContent.styled.js";
import { Container } from "../Common/Common.styled.js";


const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];


function MainContent({cardList, isLoaded}) {
  return (
    <Main>
      <Container>
        <MainBlock>
          <MainContentSt>
            {isLoaded ? "Loading" : statusList.map((item) => (
              <Column 
              key={item}
              title={item} 
              cardList={cardList.filter((card) => card.status === item)}/>)
          )}
          </MainContentSt>
        </MainBlock>
      </Container>
    </Main>
  );
}
export default MainContent;