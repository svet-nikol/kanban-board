import "./App.css";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import MainContent from "./components/MainContent/MainContent";
import PopBrowse from "./components/pop-up/PopBrowse/PopBrowse";
import PopNewCard from "./components/pop-up/PopNewCard/PopNewCard";
import PopExit from "./components/pop-up/PopExit/PopExit";
import { useEffect, useState } from "react";
import { cardList } from "./data";

function App() {
  const [cards, setCards] = useState(cardList);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 1000);
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
    <Wrapper>
      <PopExit />
      <PopNewCard />
      <PopBrowse />

      <Header addCard={addCard} />
      <MainContent isLoaded={isLoaded} cardList={cards} />
    </Wrapper>
  );
}

export default App;
