import { useEffect, useState } from "react";
import { cardList } from "../data.js";
import { GlobalStyle } from "../Global.Styled.js";
import Wrapper from "../components/Wrapper/Wrapper.jsx";
import Header from "../components/Header/Header.jsx";
import MainContent from "../components/MainContent/MainContent.jsx";
import "../App.css";
import { Outlet } from "react-router-dom";


export default function HomePageBoard() {

    const [isLoaded, setIsLoaded] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setIsLoaded(false);
      }, 300);
    }, []);
  

  
    return (
      <>
        <GlobalStyle />
        <Wrapper>

          <Outlet />
  
          <Header />
          <MainContent isLoaded={isLoaded} cardList={cardList} />

        </Wrapper>
      </>
    );
}