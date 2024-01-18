import { GlobalStyle } from "../Global.Styled.js";
import { Link } from "react-router-dom";
import { AppRoutes } from "../lib/approutes.js";
import styled from "styled-components";

const Block = styled.div`
      max-width: 100%;
      height: 100%;
      min-width: 320px;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      gap: 40px;
      align-items: center;
      justify-content: center;
`;


export default function NotFoundPage() {
  return (
    <>
      <GlobalStyle />
      <Block>
        <h1>Ошибка 404. Страница не существует:(</h1>
        <Link to={AppRoutes.HOME}>Вернуться на главную</Link>
      </Block>
    </>
  );
}
