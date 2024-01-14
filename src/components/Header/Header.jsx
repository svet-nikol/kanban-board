import { useState } from "react";
import { Container } from "../Common/Common.styled.js";
import {
  HeaderSt,
  HeaderBlock,
  HeaderLogoImg,
  HeaderNav,
  HeaderBtnNewTask,
  HeaderUser,
} from "./Header.styled.js";
import { GlobalStyle } from "../../Global.Styled.js";

function Header({ addCard }) {
  const [isOpened, setIsOpened] = useState(false);
  function togglePopUp() {
    setIsOpened((prev) => !prev);
  }
  return (
    <HeaderSt>
      <GlobalStyle />
      <Container>
        <HeaderBlock>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <HeaderLogoImg src="public/images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <HeaderLogoImg src="public/images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <HeaderNav>
            <HeaderBtnNewTask
              className="_hover01"
              id="btnMainNew"
              onClick={addCard}
            >
              Создать новую задачу
            </HeaderBtnNewTask>
            <HeaderUser href="#" className="_hover02" onClick={togglePopUp}>
              Ivan Ivanov
            </HeaderUser>
            {isOpened && (
              <div className="header__pop-user-set pop-user-set">
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderSt>
  );
}

export default Header;
