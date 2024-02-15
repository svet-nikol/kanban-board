import { useState } from "react";
import { Container } from "../Common/Common.styled.js";
import {
  HeaderSt,
  HeaderBlock,
  HeaderLogoImg,
  HeaderNav,
  HeaderBtnNewTask,
  HeaderUser,
  HeaderPopUserSet,
  HeaderPopUserName,
  HeaderPopUserMail,
  HeaderPopUserThemeWrapper,
  HeaderPopUserThemeHeader,
  HeaderThemeCheckbox,
} from "./Header.styled.js";
import { GlobalStyle } from "../../Global.Styled.js";
import { AppRoutes } from "../../lib/approutes.js";
import { Link } from "react-router-dom";
import { LinkButtonFixWidth } from "../Buttons/Buttons.styled.js";

function Header({ user }) {
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
            <Link to={AppRoutes.HOME} target="_self">
              <HeaderLogoImg src="public/images/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="header__logo _dark">
            <Link to={AppRoutes.HOME} target="_self">
              <HeaderLogoImg src="public/images/logo_dark.png" alt="logo" />
            </Link>
          </div>
          <HeaderNav>
            <Link to={AppRoutes.NEW_CARD}>
              <HeaderBtnNewTask className="_hover01" id="btnMainNew">
                Создать новую задачу
              </HeaderBtnNewTask>
            </Link>

            <HeaderUser href="#" className="_hover02" onClick={togglePopUp}>
              {user.name}
            </HeaderUser>
            {isOpened && (
              <HeaderPopUserSet>
                <HeaderPopUserName>{user.name}</HeaderPopUserName>
                <HeaderPopUserMail>{user.login}</HeaderPopUserMail>
                <HeaderPopUserThemeWrapper>
                  <HeaderPopUserThemeHeader>
                    Темная тема
                  </HeaderPopUserThemeHeader>
                  <HeaderThemeCheckbox type="checkbox" name="checkbox" />
                </HeaderPopUserThemeWrapper>
                <LinkButtonFixWidth
                  className="_hover03"
                  to={AppRoutes.EXIT}
                  onClick={togglePopUp}
                >
                  Выйти
                </LinkButtonFixWidth>
              </HeaderPopUserSet>
            )}
            
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderSt>
  );
}

export default Header;
