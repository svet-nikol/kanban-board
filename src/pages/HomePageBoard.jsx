import { useEffect, useState } from "react";
import { cardList } from "../data.js";
import { GlobalStyle } from "../Global.Styled.js";
import Wrapper from "../components/Wrapper/Wrapper.jsx";
import Header from "../components/Header/Header.jsx";
import MainContent from "../components/MainContent/MainContent.jsx";
import "../App.css";
import { Link, Outlet } from "react-router-dom";
import { AppRoutes } from "../lib/approutes.js";


export default function HomePageBoard() {
    const [cards, setCards] = useState(cardList);

    const [isLoaded, setIsLoaded] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setIsLoaded(false);
      }, 300);
    }, []);
  
    function addCard() {
      setCards([
        ...cards,
        {
          id: cards.length + 1,
          theme: "Copywriting",
          title: "Новая задача",
          date: "30.10.23",
          status: "Без статуса",
          classNameTheme: "_purple",
        },
      ]);
    }
  
    return (
      <>
        <GlobalStyle />
        <Wrapper>

          <Outlet />
  
          <Header addCard={addCard} />
          <MainContent isLoaded={isLoaded} cardList={cards} />
          
          <Link to={AppRoutes.LOGIN}>Войти</Link>
          <br />
          <Link to={AppRoutes.REGISTER}>Зарегистрироваться</Link>
          <br />
          <Link to={AppRoutes.EXIT}>Выйти</Link>
          <br />
          <Link to={AppRoutes.NEW_CARD}>Создать задачу</Link>
        </Wrapper>
      </>
    );
}