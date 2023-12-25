import "./App.css";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import MainContent from "./components/MainContent/MainContent";
import PopBrowse from "./components/pop-up/PopBrowse/PopBrowse";
import PopNewCard from "./components/pop-up/PopNewCard/PopNewCard";
import PopExit from "./components/pop-up/PopExit/PopExit";

function App() {
  return (
    <Wrapper>
      <PopExit />
      <PopNewCard />
      <PopBrowse />

      <Header />
      <MainContent />
    </Wrapper>
  );
}

export default App;
