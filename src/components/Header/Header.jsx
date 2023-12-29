import { useState } from "react";

function Header({addCard}) {
  const [isOpened, setIsOpened] = useState(false);
  function togglePopUp() {
    setIsOpened((prev) => !prev)
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="public/images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="public/images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew" onClick={addCard}>
            Создать новую задачу
            </button>
            <a href="#" className="header__user _hover02" onClick={togglePopUp}>
              Ivan Ivanov
            </a>
            {isOpened && 
                        <div
                        className="header__pop-user-set pop-user-set"
                      >
                        {/* <a href="">x</a> */}
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
            }
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
