import { useEffect, useState } from "react";
import { GlobalStyle } from "../Global.Styled.js";
import Wrapper from "../components/Wrapper/Wrapper.jsx";
import Header from "../components/Header/Header.jsx";
import MainContent from "../components/MainContent/MainContent.jsx";
import "../App.css";
import { Outlet } from "react-router-dom";
import { getTasks } from "../api.js";
import { useUser } from "../hooks/useUser.jsx";

export default function HomePageBoard() {
  const {isLoggedInUser} = useUser();
  const [cards, setCards] = useState(null);
  const [getCardsIsLoaded, setGetCardsIsLoaded] = useState(true);
  const [getCardsError, setGetCardsError] = useState(null);
  useEffect(() => {
    getTasks({token: isLoggedInUser.token})
      .then((cards) => {
        setCards(cards.tasks);
      })
      .catch((error) => {
        setGetCardsError(error.message);
      })
      .finally(() => {
        setGetCardsIsLoaded(false);
      });
  }, [isLoggedInUser]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Outlet />

        <Header user={isLoggedInUser}/>
        {getCardsError ? (
          <p style={{ color: "red" }}>{getCardsError}</p>
        ) : (
          <MainContent isLoaded={getCardsIsLoaded} cardList={cards} />
        )}
      </Wrapper>
    </>
  );
}
