import { useEffect, useState } from "react";
import { GlobalStyle } from "../Global.Styled.js";
import Wrapper from "../components/Wrapper/Wrapper.jsx";
import Header from "../components/Header/Header.jsx";
import MainContent from "../components/MainContent/MainContent.jsx";
import "../App.css";
import { Outlet } from "react-router-dom";
import { getTasks } from "../api.js";

export default function HomePageBoard({isLoggedIn}) {
  const [cards, setCards] = useState(null);
  const [getCardsIsLoaded, setGetCardsIsLoaded] = useState(true);
  const [getCardsError, setGetCardsError] = useState(null);
  useEffect(() => {
    getTasks({token: isLoggedIn.token})
      .then((cards) => {
        setCards(cards.tasks);
      })
      .catch((error) => {
        setGetCardsError(error.message);
      })
      .finally(() => {
        setGetCardsIsLoaded(false);
      });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Outlet />

        <Header user={isLoggedIn}/>
        {getCardsError ? (
          <p style={{ color: "red" }}>{getCardsError}</p>
        ) : (
          <MainContent isLoaded={getCardsIsLoaded} cardList={cards} />
        )}
      </Wrapper>
    </>
  );
}
