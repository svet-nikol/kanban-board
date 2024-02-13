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
import { AppRoutes } from "../../lib/approutes.js";
import { Link } from "react-router-dom";

function Header({user}) {
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
            <Link to={AppRoutes.NEW_CARD}>
              <HeaderBtnNewTask
                className="_hover01"
                id="btnMainNew"
              >
                Создать новую задачу
              </HeaderBtnNewTask>
            </Link>

            <HeaderUser href="#" className="_hover02" onClick={togglePopUp}>
              {user.name}
            </HeaderUser>
            {isOpened && (
              <div className="header__pop-user-set pop-user-set">
                <p className="pop-user-set__name">{user.name}</p>
                <p className="pop-user-set__mail">{user.login}</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <Link
                  className="pop-exit__exit-no _hover03"
                  to={AppRoutes.EXIT}
                  onClick={togglePopUp}
                >
                  Выйти
                </Link>
              </div>
            )}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderSt>
  );
}

export default Header;
