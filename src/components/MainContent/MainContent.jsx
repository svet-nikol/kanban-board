import Column from "../Column/Column";
import { Main, MainBlock, MainContentSt } from "./MainContent.styled.js";
import { Container } from "../Common/Common.styled.js";
import { useTasks } from "../../hooks/useTasks.jsx";
import { statusList } from "../../lib/statusList.js";


function MainContent({ isLoaded }) {
  const { tasks } = useTasks();
  return (
    <Main>
      <Container>
        <MainBlock>
          <MainContentSt>
            {isLoaded
              ? "Loading"
              : statusList.map((item) => (
                  <Column
                    key={item}
                    title={item}
                    cardList={tasks.filter((card) => card.status === item)}
                  />
                ))}
          </MainContentSt>
        </MainBlock>
      </Container>
    </Main>
  );
}
export default MainContent;
