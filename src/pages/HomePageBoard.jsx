import { useEffect, useState } from "react";
import { cardList } from "../data.js";
import { GlobalStyle } from "../Global.Styled.js";
import Wrapper from "../components/Wrapper/Wrapper.jsx";
import Header from "../components/Header/Header.jsx";
import MainContent from "../components/MainContent/MainContent.jsx";
import "../App.css";
import { Outlet } from "react-router-dom";
import { getCards } from "../lib/api.js";

export default function HomePageBoard() {
  const [cards, setCards] = useState(cardList);
  const [getCardsIsLoaded, setGetCardsIsLoaded] = useState(false);
  useEffect(() => {
    setGetCardsIsLoaded(true);
    getCards().then((cards) => {
      console.log(cards);
      setGetCardsIsLoaded(false);
      setCards(cards.tasks);
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Outlet />

        <Header />
        <MainContent isLoaded={getCardsIsLoaded} cardList={cards} />
      </Wrapper>
    </>
  );
}
